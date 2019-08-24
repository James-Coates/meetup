/* eslint-disable strict */
'use strict';

const axios = require('axios');

// Meetup OAUTH details
const consumerKey = 'n9bvuhvmod0qgbtuog9kadtfcj';
const consumerSecret = '2m408k4cfjcn8e7r3vucrfog82';
const redirectURI = 'https://james-coates.github.io/meetup/';

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=' + consumerKey // CONSUMER KEY
    + '&client_secret=' + consumerSecret
    + '&grant_type=authorization_code'
    + '&redirect_uri=' + redirectURI
    + '&code=' + event.pathParameters.code; // DYNAMIC AUTHORIZATION CODE
    // + '&code=a5938f4322363dcc56712b53a1cef336'

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://james-coates.github.io'
    },
    body: JSON.stringify({
      accessToken: info.data.access_token,
      refreshToken: info.data.refresh_token,
    })
  }
}

module.exports.refreshAccessToken = async (event) => {

  const MEETUP_OAUTH_REFRESH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=' + consumerKey // CONSUMER KEY
    + '&client_secret=' + consumerSecret // CONSUMER SECRET
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_REFRESH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://james-coates.github.io'
    },
    body: JSON.stringify({
      accessToken: info.data.access_token,
      refreshToken: info.data.refresh_token
    })
  }
}





// Redirect URI
// https://secure.meetup.com/oauth2/authorize?client_id=n9bvuhvmod0qgbtuog9kadtfcj&response_type=code&redirect_uri=https://james-coates.co.uk/meetup/
// https://secure.meetup.com/oauth2/authorize?client_id=n9bvuhvmod0qgbtuog9kadtfcj&response_type=code&redirect_uri=https://james-coates.co.uk/

// https://secure.meetup.com/oauth2/access?client_id=hi1r286u66ertam55qqihmjp1b&client_secret=n4hh0j03k2ms98aj61r50mlkrm&grant_type=authorization_code&redirect_uri=https://james-coates.co.uk/meetup/&code=c362ff810374e710ecacdecc9413ad1c
// c362ff810374e710ecacdecc9413ad1c
// https://secure.meetup.com/oauth2/access/client_id=hi1r286u66ertam55qqihmjp1b&client_secret=mop6jupuvn7j6aaa6kpi60e4em&grant_type=refresh_token&refresh_token=8b183ab520a553de065fc611bb43d2c7

// https://m49ckcqvs2.execute-api.eu-west-2.amazonaws.com/dev/api/token/ad5401cea1a6e704dcd0b522fff689c4

// https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=Berlin&accesstoken=a69737f3a0ae8e0b67235ed79b20c1dd

// https://api.meetup.com/find/groups?zip=11211&radius=1&category=25&order=members&accesstoken=ed08260bf8bcda395fdabac835fa4c7b
