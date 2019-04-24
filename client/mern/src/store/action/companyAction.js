import React from 'react';
import axios from 'axios'
import {actionTypes} from './actionTypes'


export const newJob = (newJob,history) =>  dispatch => {

    
    //config header
//    const  config = {
//         headers : {
//             "content-type": "application/json" //like postman
//         }
//     }

//     //req body 
    // const body = JSON.stringify({title,salary,allounce,descrip});
    // dispatch({
    //     type: actionTypes.NEW_JOBS,
    //     pasyload: body,
    // })
    //post req
      axios.post('/api/newJob',newJob).then(res => 
        dispatch({
            type: actionTypes.NEW_JOBS,
            pasyload: res.data,
        })
    
    // console.log("succes," ,res)
    )
    .catch(err => {
        console.log("error", err.message)
        // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            
        })
    })

}


