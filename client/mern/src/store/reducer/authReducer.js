import React from 'react';
import {actionTypes} from '../action/actionTypes'
import isempty from 'is-empty'
import { stat } from 'fs';

const initialState = {
    token: localStorage.getItem('token'),
    isAuth: false ,
    loading: false,
    user : null,
    authUser: '',
    
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
       
        case actionTypes.AUTH_ERROR :

            return {
                ...state,
                isAuth: true,
                authUser: action.payload
            }
        // case actionTypes.LOGOUT_SUCCES :
        localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuth: false,
                isLoading: false,
                authUser: ''
            }

        default: return state
    }
}