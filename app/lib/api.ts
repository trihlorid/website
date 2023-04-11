import axios from 'axios';

export const apiV1 = axios.create({
  baseURL: '/api',
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
      Accept: 'application/json',
    },
  },
});

export const apiServer = axios.create({
  baseURL: 'https://d1d698vyoprd9a.cloudfront.net',
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
      // Accept: 'application/json',
    },
  },
});

/*
export const apiV1 = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'https://cors-anywhere.herokuapp.com/https://d1d698vyoprd9a.cloudfront.net'
      : 'https://d1d698vyoprd9a.cloudfront.net',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
*/
