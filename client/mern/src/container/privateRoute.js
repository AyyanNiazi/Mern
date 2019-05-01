import React,{Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import { stat } from 'fs';


const PrivateRoute = ({ component: Component, auth, ...rest}) => ( 

    
    <Route 
        {...rest}
        render=
        
        {props => auth.isAuth === true  ?
          
        (
            <Component  {...props} />
        ):
       
        (<div> 
            <Redirect to='/login' />
            {alert("please login first")}
            </div>
        )}
    />
)

const mapStateToProps = (state) => {
    console.log(state.authReducer.authUser.user);
    return {
        auth: state.authReducer
        
    }
    }

export default connect(mapStateToProps,null)(PrivateRoute);
