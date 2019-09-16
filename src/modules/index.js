import { combineReducers } from 'redux';
import loading from './loading';
import signUpModule from './signUpModule';

export default combineReducers({
  loading,
  signUpModule
});
