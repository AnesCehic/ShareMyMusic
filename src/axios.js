import axios from 'axios';

const deezer = axios.create({
  baseURL: "http://localhost:4200"
});

export default deezer;