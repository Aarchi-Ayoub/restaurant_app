import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import searchReducer from '../modules/search/reducers';
import itemReducer from '../modules/details/reducers';

export default combineReducers({
  global: globalReducer,
  search: searchReducer,
  result: itemReducer,
});
