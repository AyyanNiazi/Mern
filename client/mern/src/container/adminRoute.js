import React,{Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import { stat } from 'fs';


const AdminRoute = ({ component: Component, auth, ...rest}) => ( 
    <Route 
        {...rest}
        render=
        
        {props => auth.isAuth === true && auth.authUser.user === "admin" ?
          
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

export default connect(mapStateToProps,null)(AdminRoute);
