import axios from 'axios';
import {returnErrors} from './errorAction'
import jwt_decode from "jwt-decode";
import {actionTypes} from './actionTypes';


export const loadUser = () => (dispatch, getState) => {
    //loading
    dispatch({type: actionTypes.USER_LOADING})


    axios.get('/api/users/login/user', tokenConfig(getState))
    .then(res => dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, ))
        dispatch({
            type: actionTypes.AUTH_ERROR,
             
        })
    })

  
 
}

export const tokenConfig = getState => {
      //token from local storage
      const token = getState().auth.token

      //headers
      const config = {
          headers: {
              "content-type": "application/json" //like postman
          }
      }
  
      //token to headers
      if(token){
          config.headers[x-auth-token] = token //here we will get curr user with the help x-auth-token
  
          return config
      } 
}















//REGISTER
// export const registerUser = (userData, history) => 
//     dispatch => {
//         axios.post("http://localhost:5000/api/users/register", userData)
//         .then(res => {
//             history.push('/login');
//             console.log("success", res)
//         })
//         .catch(err => {dispatch({
//             type: actionTypes.GET_ERRORS,
//             payload: err.response.data
//         })
//             console.log("user data", err)
//     })
//     }


// //get user token for future uses
// export const loginuser = userData =>  dispatch => {
//         axios.post("http://localhost:5000/api/users/register", userData)
//         .then(res => {
//             const {token} = res.data;
//             localStorage.setItem("jwtToken: ", token);
//             //token for auth header
//             setAuthToken(token)
//             //decoding encrypted token which we send from server 
//             const decoded = jwt_decode(token);
//             dispatch(setCurrentUser(decoded));
//             console.log("success")
//             this.props.history.push('/register')
//         }).catch(err => dispatch({
//             type: actionTypes.GET_ERRORS,
//             payload: err.response.data,
//         }))
//     }


// //Loggedin user
// export const setCurrentUser = decoded => {
//     return {
//         type: actionTypes.SET_CURRENT_USER,
//         payload: decoded
//     }
// }

// //loading
// export const userloading = () => {
//     return {
//         type: actionTypes.userloading,

//     }
// }

// //Loggedout
// export const logout = () => 
//     dispatch => {
//         localStorage.removeItem("jwtToken");
//         setAuthToken(false) //this will break action for future uses
//         dispatch(setCurrentUser({}))
//     }
