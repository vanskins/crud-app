import {combineReducers} from 'redux';
import users from './users/reducer'
const reducers = {
  users
}
const allReducers= combineReducers(reducers);
export default allReducers;