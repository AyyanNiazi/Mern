import React,{Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import propTypes from 'prop-types'


const PrivateRoute = ({ component: Component, auth, ...rest}) => ( 
    <Route 
        {...rest}
        render={props => auth.isAuthenticated === true ?
        (
            <Component  {...props} />
        ): (
            <Redirect to='/login' />
        )}
    />
)

const mapStateToProps = (state) => ({
    auth: state.authReducer
})

export default connect(mapStateToProps,null)(PrivateRoute);
