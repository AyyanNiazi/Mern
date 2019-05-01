import React from 'react';
import {actionTypes} from '../action/actionTypes'
// import isempty from 'is-empty'
// import { stat } from 'fs';

const initialState = {
    token: localStorage.getItem('token'),
    remove: '',
    isAuth: false ,
    loading: false,
    user : null,
    authUser: '',
    state:''
    
}

export default function (state = initialState, action){

    // let remover = localStorage.clear()
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
            // state:   localStorage.setItem('state', ...action.payload)

        }
       
        case actionTypes.AUTH_ERROR :

            return {
                ...state,
                isAuth: true,
                authUser: action.payload
            }
        case actionTypes.LOGOUT_SUCCES :
        localStorage.removeItem('state');
        console.log("reducers sy")
            return {
                ...state,
                token: null,
                user: null,
                isAuth: false,
                isLoading: false,
                authUser: '',
                remove: localStorage.clear()

            }

        default: return state
    }
}