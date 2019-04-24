import React from 'react';
import {actionTypes} from '../action/actionTypes'
import isempty from 'is-empty'

const initialState = {
    newjob : [],
}

export default function (state = initialState, action){
const newArray = state.newjob.push(action.payload)
    switch(action.type){
        case actionTypes.NEW_JOBS : 
        return state = {
            ...state,
            newjob: action.payload
        }
       
    

        default: return state
    }
}