import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http:yoursite.com`
})

// Make sure to leave in the final / at the end of the URL to your site!