import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://3sonsdevelopment.com/demo/wpvue/`
})

// Make sure to leave in the final / at the end of the URL to your site!
// http://yoursite.com