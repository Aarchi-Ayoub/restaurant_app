/* eslint-disable prettier/prettier */
import {useState} from 'react';
import axios from '../api';
export default () => {
  /* Search result */
  const [searchResult, SetSearchResult] = useState([]);
  // Error message
  const [error, SetError] = useState('');
  /* Search methode */
  const serach = async searchText => {
    try {
      const {data} = await axios.get('/search', {
        params: {
          limit: 50,
          term: searchText,
          location: 'san jose',
        },
      });
      SetSearchResult(data.businesses);
    } catch (err) {
      SetError(err.message);
    }
  };
  return [searchResult, error, serach];
};
