/* eslint-disable strict */
'use strict';

const axios = require('axios');

// Meetup OAUTH details
const consumerKey = 'hi1r286u66ertam55qqihmjp1b';
const consumerSecret = 'mop6jupuvn7j6aaa6kpi60e4em';
const redirectURI = 'https://james-coates.co.uk/';

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=hi1r286u66ertam55qqihmjp1b'
    + '&client_secret=' + consumerSecret
    + '&grant_type=authorization_code'
    + '&redirect_uri=' + redirectURI
    + '&code=' + event.pathParameters.code; // DYNAMIC AUTHORIZATION CODE

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      accessToken: info.data.access_token,
      refreshToken: info.data.refresh_token
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
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      accessToken: info.data.access_token,
      refreshToken: info.data.refresh_token
    })
  }
}






// https://secure.meetup.com/oauth2/authorize?client_id=hi1r286u66ertam55qqihmjp1b&response_type=code&redirect_uri=https://james-coates.co.uk/
// https://secure.meetup.com/oauth2/authorize?client_id=hi1r286u66ertam55qqihmjp1b&response_type=code&redirect_uri=https://james-coates.co.uk/

// https://secure.meetup.com/oauth2/access/client_id=hi1r286u66ertam55qqihmjp1b&client_secret=mop6jupuvn7j6aaa6kpi60e4em&grant_type=refresh_token&refresh_token=8b183ab520a553de065fc611bb43d2c7

// https://m49ckcqvs2.execute-api.eu-west-2.amazonaws.com/dev/api/token/ad5401cea1a6e704dcd0b522fff689c4

// https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=Berlin&accesstoken=a69737f3a0ae8e0b67235ed79b20c1dd

// https://api.meetup.com/find/groups?zip=11211&radius=1&category=25&order=members&accesstoken=ed08260bf8bcda395fdabac835fa4c7b