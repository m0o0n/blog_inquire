import axios from 'axios';

const $HostInstance = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com/',
});
export default $HostInstance;
