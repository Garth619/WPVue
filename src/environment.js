import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://3sonsdevelopment.com/demo/artisan/wp-json/`
})