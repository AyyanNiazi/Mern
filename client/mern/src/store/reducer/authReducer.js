import React from 'react';
import {actionTypes} from '../action/actionTypes'
import isempty from 'is-empty'

const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null ,
    loading: false,
    user : null,
}

export default function (state = initialState, action){

    switch(action.type){
        case actionTypes.USER_LOADING : 
        return {
            ...state,
            loading: true
        }
        case actionTypes.USER_LOADED :
                return {
                    ...state,
                    isAuth: true,
                    user: action.payload,
                    isLoading: false,
                }
        case actionTypes.LOGIN_SUCCES: 

        case actionTypes.REGISTER_SUCCES:
        localStorage.setItem('token', action.payload.token)
             return {
            ...state,
            ...action.payload,
            isAuth: true,
            isLoading: false,
        }
       
        case actionTypes.AUTH_ERRORS :
        case actionTypes.LOGIN_FAIL :
        case actionTypes.LOGOUT_SUCCES :
        case actionTypes.REGISTER_FAIL : //  this action represebnts all above 3 actions also
        //remove token from localstorage
        localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuth: false,
                isLoading: false
            }

        default: return state
    }
}