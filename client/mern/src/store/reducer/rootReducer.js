import React from 'react';
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
export default combineReducers({
    authReducer,
    errorReducer

})
