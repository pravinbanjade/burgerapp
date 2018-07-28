import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-786.firebaseio.com/'
});

export default instance;
