import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from'prop-types';
import {NavLink} from 'reactstrap'
import {logout} from '../../store/action/authAction';

class Logout extends Component{
  

  static propTypes = {
    logout: PropTypes.func.isRequired
  }

// logout = e => {
    
// }

    render(){
        return (
            <React.Fragment>
                <NavLink onClick={this.props.logout} href='#' >
                    Logout
                </NavLink>
            </React.Fragment>
        )
    }
}



export default connect(null,{logout})(Logout)
