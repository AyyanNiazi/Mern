import React from 'react';
import {actionTypes} from '../action/actionTypes'
import isempty from 'is-empty'

const initialState = {
    isAuth: false || undefined ,
    loading: false,
    user : {},
}

export default function authReducer(state = initialState, action){

    switch(action.type){
        case actionTypes.SET_CURRENT_USER :
                return {
                    ...state,
                    isAuth: !isempty(action.payload),
                    user: action.payload,
                }
        case actionTypes.USER_LOADING : 
                return {
                    ...state,
                    loading: true
                }
        case actionTypes.GET_ERRORS :
                return action.payload;

        default: return state
    }
}