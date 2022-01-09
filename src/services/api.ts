import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://infinite-thicket-91741.herokuapp.com',
});
