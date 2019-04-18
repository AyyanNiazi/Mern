import axios from 'axios';
import setAuthToken from '../../utilities/setAuthToken';
import {actionTypes} from './actionTypes'
import jwt_decode from "jwt-decode";


//REGISTER
export const registerUser = (userData, history) => 
    dispatch => {
        axios.post("http://localhost:5000/api/users/register", userData)
        .then(res => history.push("/login"))
        .catch(err => {dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err.response.data
        })
            console.log("error")
    })
    }


//get user token for future uses
export const loginuser = userData => 
    dispatch => {
        axios.post("/api/users/register", userData)
        .then(res => {
            const {token} = res.data;
            localStorage.setItem("jwtToken: ", token);
            //token for auth header
            setAuthToken(token)
            //decoding encrypted token which we send from server 
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        }).catch(err => dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err.response.data,
        }))
    }


//Loggedin user
export const setCurrentUser = decoded => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: decoded
    }
}

//loading
export const userloading = () => {
    return {
        type: actionTypes.userloading,

    }
}

//Loggedout
export const logout = () => 
    dispatch => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false) //this will break action for future uses
        dispatch(setCurrentUser({}))
    }
