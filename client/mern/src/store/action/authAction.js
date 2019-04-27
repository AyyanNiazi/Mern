import { actionTypes } from "./actionTypes";

// import axios from 'axios';
// import {returnErrors} from './errorAction'
// import jwt_decode from "jwt-decode";
// import {actionTypes} from './actionTypes';
// import { withRouter } from 'react-router-dom';


// // export const loadUser = () => (dispatch, getState) => {
// //     //loading
// //     dispatch({type: actionTypes.USER_LOADING})

// //     console.log(getState)
// //     axios.get('/api/login/user', tokenConfig(getState))
// //     .then(res => dispatch({
// //         type: actionTypes.USER_LOADED,
// //         payload: res.data
// //     }))
// //     .catch(err => {
// //         dispatch(returnErrors(err.response.data, err.response.status, ))
// //         dispatch({
// //             type: actionTypes.AUTH_ERROR,
             
// //         })
// //     })
 
// // }

export const auth = authData => {
    return {
        type: actionTypes.AUTH_ERROR,
        payload:authData,
        
    }
    console.log("action auth");
}

// //register 
// export const registerUser = ({name,email,pass,selector},history) =>  dispatch => {
//     //config header
//    const  config = {
//         headers : {
//             "content-type": "application/json" //like postman
//         }
//     }

// //     //req body 
//     const body = JSON.stringify({name,email,pass,selector});

//     //post req
//       axios.post('/api/register',body,config).then(res => 
//         dispatch({
//             type: actionTypes.REGISTER_SUCCES,
//             pasyload: res.data,
//         })
    
//     // console.log("succes," ,res)
//     )
//     .catch(err => {
//         console.log("error", err.message)
//         // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
//         dispatch({
//             type: actionTypes.REGISTER_FAIL,
            
//         })
//     })

// }



// // export const tokenConfig = getState => {
// //     //token from local storage
// //     const token = getState().auth //yhn auth.token hoga
    
// // console.log(getState().auth,"token", token)
// //     //headers
// //     const config = {
// //         headers: {
// //             "content-type": "application/json" //like postman
// //         }
// //     }

// //     //token to headers
// //     if(token){
// //         config.headers['x-auth-token'] = token //here we will get curr user with the help x-auth-token

// //     } 

// //     return config

// // }
















// //REGISTER
// // export const registerUser = (userData,props) =>  
// //     dispatch => {
// //         console.log(props,"props")

// //         axios.post("/api/register", userData)
// //         .then(res => {
// //             console.log(props,"props")
// //             // props.history.push('/login');
// //             console.log("success", res)
// //         })
// //         .catch(err => {dispatch({
// //             type: actionTypes.GET_ERRORS,
// //             payload: err.response.data
// //         })
// //             console.log("user data", err)
// //     })
// //     }


// // //get user token for future uses
// // export const loginuser = userData =>  dispatch => {
// //         axios.post("http://localhost:5000/api/users/register", userData)
// //         .then(res => {
// //             const {token} = res.data;
// //             localStorage.setItem("jwtToken: ", token);
// //             //token for auth header
// //             setAuthToken(token)
// //             //decoding encrypted token which we send from server 
// //             const decoded = jwt_decode(token);
// //             dispatch(setCurrentUser(decoded));
// //             console.log("success")
// //             this.props.history.push('/register')
// //         }).catch(err => dispatch({
// //             type: actionTypes.GET_ERRORS,
// //             payload: err.response.data,
// //         }))
// //     }


// // //Loggedin user
// // export const login = ({email,password}) => dispatch => {
// //     //config header
// //    const  config = {
// //         headers : {
// //             "content-type": "application/json" //like postman
// //         }
// //     }

// //     //req body 
// //     const body = JSON.stringify({email,password});

// //     //post req
// //       axios.post('/api/login', body, config)
// //     .then(res => dispatch({
// //         type: actionTypes.LOGIN_SUCCES,
// //         pasyload: res.data,
// //     }))
// //     .catch(err => {
// //         console.log("error", err)
// //         dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
// //         dispatch({
// //             type: actionTypes.LOGIN_FAIL,
            
// //         })
// //     })
// // }

// // //loading
// // export const userloading = () => {
// //     return {
// //         type: actionTypes.userloading,

// //     }
// // }

// //Loggedout
export const logout = () => { 
return {
    type: actionTypes.LOGOUT_SUCCES
}
}


//     // const authaction = {
//     //     registerUser,
//     //     loadUser,

//     // }

//     // export default authaction
