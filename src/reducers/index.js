import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import searchReducer from '../modules/search/reducers';
export default combineReducers({
  global: globalReducer,
  search: searchReducer,
});
