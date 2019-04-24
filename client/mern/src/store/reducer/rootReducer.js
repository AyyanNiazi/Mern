import React from 'react';
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import companyReducer from './companyReducer'
export default combineReducers({
    authReducer,
    errorReducer,
    companyReducer

})
