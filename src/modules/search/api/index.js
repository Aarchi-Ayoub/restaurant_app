/* eslint-disable prettier/prettier */
import axios from 'axios';
import variables from 'config/API';
export default axios.create({
  baseURL: variables.BASE_URL,
  headers: {
    Authorization: `Bearer${variables.API_KEY}`,
  },
});
