import { mockEvents } from './mock-events';
import axios from 'axios';

const mockSuggestions = [
  {
    city: 'Munich',
    country: 'de',
    localized_country_name: 'Germany',
    name_string: 'Munich, Germany',
    zip: 'meetup3',
    lat: 48.14,
    lon: 11.58
  },
  {
    city: 'Munich',
    country: 'us',
    localized_country_name: 'USA',
    state: 'ND',
    name_string: 'Munich, North Dakota, USA',
    zip: '58352',
    lat: 48.66,
    lon: -98.85
  }
];


async function getSuggestions(query) {
  if (window.location.href.startsWith('http://localhost')) {
    return !query ? [] : (mockSuggestions.filter(item => item.city.toLowerCase().includes(query.toLowerCase())));
  }

  const token = await getAccessToken();
  if (token) {
    const url = 'https://api.meetup.com/find/locations?&sign=true&photo-host=public&query='
      + query
      + '&access_token=' + token;
    const result = await axios.get(url);
    return result.data;
  }
  return [];
}

async function getEvents(lat, lon, page) {
  // return mockEvents.events;
  if (window.location.href.startsWith('http://localhost')) {
    const city = mockEvents.city;
    const events = page > 0 ? mockEvents.events.slice(0, page) : [];
    return {city, events};
  }

  const token = await getAccessToken();

  if (token) {
    let url = 'https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public'
      + '&access_token=' + token;
    // lat, lon is optional; if you have a lat and lon, you can add them
    if (lat && lon) {
      url += '&lat=' + lat + '&lon=' + lon;
    }
    if (page) {
      url += '&page=' + page;
    }
    const result = await axios.get(url);
    return result.data;
  }
}

function getAccessToken() {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const lastSavedTime = localStorage.getItem('lastSavedTime');

  if(!accessToken) {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if(!code) {
      window.location.href = 'https://secure.meetup.com/oauth2/authorize?client_id=n9bvuhvmod0qgbtuog9kadtfcj&response_type=code&redirect_uri=https://james-coates.co.uk/meetup/';
      return null;
    }
    return getOrRenewAccessToken('get', code);
  }

  if(accessToken && (Date.now() - lastSavedTime < 3600000)) {
    return accessToken;
  }

  // If the accessToken is expired, try and renew using the renew token
  return getOrRenewAccessToken('renew', refreshToken);
}

async function getOrRenewAccessToken(type, key) {
  let url 
  if (type === 'get') {
    url ='https://m49ckcqvs2.execute-api.eu-west-2.amazonaws.com/dev/api/token/' + key;
  } else if (type === 'renew') {
    url ='https://m49ckcqvs2.execute-api.eu-west-2.amazonaws.com/dev/api/refresh/' + key;
  }
  
  const tokenInfo = await axios.get(url);
  console.log(tokenInfo);
  localStorage.setItem('accessToken', tokenInfo.data.accessToken);
  localStorage.setItem('refreshToken', tokenInfo.data.refreshToken);
  localStorage.setItem('lastSavedTime', Date.now());

  return tokenInfo.data.accessToken;
}

export { getSuggestions, getEvents };