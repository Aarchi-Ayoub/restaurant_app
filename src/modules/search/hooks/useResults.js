/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {search} from '../actions';
import axios from '../api';
export default () => {
  /* Search result */
  const [searchResult, SetSearchResult] = useState([]);
  // Error message
  const [error, SetError] = useState('');
  const dispatch = useDispatch();
  /* Search methode */
  const serach = async searchText => {
    // try {
    //   const {data} = await axios.get('/search', {
    //     params: {
    //       limit: 50,
    //       term: searchText,
    //       location: 'san jose',
    //     },
    //   });
    //   SetSearchResult(data.businesses);
    // } catch (err) {
    //   SetError(err.message);
    // }
    const err = await dispatch(search(searchText));
    if (err) {
      SetError(err);
    }
  };
  return [searchResult, error, serach];
};
