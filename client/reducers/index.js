/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import loginReducer from './loginReducer';


// combine reducers
const reducers = combineReducers({
    login: loginReducer,
});

// make the combined reducers available for import
export default reducers;

