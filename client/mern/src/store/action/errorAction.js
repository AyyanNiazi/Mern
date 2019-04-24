import {actionTypes} from './actionTypes';
const axios = require("axios");


export const returnErrors = (msg,status,id=null) =>{
    return {
        type: actionTypes.GET_ERRORS,
        payload: {msg,status,id},
    }
} 

///clear erros
export const clearErros = () => {
    return {
        type: actionTypes.CLEAR_ERRORS,
        
    }
}


