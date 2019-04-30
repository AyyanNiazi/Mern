import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from'prop-types';
import {NavLink} from 'reactstrap'
import {Redirect}  from 'react-router-dom'
import {logout} from '../../store/action/authAction';

class Logout extends Component{
    constructor(props){
        super(props);
        this.state = {
            evein: false
        }
    }
   

  static propTypes = {
    logout: PropTypes.func.isRequired
  }

logouthandler () {

        // this.props.history.push('/login');
        // this.setState({evein: true})
// this.forceUpdate()
    console.log(this.props)
    if(this.props.auth.isAuth === true){

    // this.props.history.push('/login')
    
    }
    // this.props.logout(logout)
}

    render(){
        if(this.state.evein === true) {
            return <Redirect to='/' />
        }
        return (
            <React.Fragment>
                <NavLink onClick={this.logouthandler.bind(this)}  >
                    Logout
                </NavLink>
            </React.Fragment>
        )
    }
}


const mapsp = state => {
    return {
        auth: state.authReducer
    }
}

export default connect(mapsp,{logout})(Logout)
