import React,{Component} from 'react';
import {BrowserRouter as Router,
Route, Link,Switch} from 'react-router-dom'
// import jwt_decode from "jwt-decode";
// import setAuthToken from "../utilities/setAuthToken";
// import { setCurrentUser, logout } from "../store/action/authAction";
// import store from '../store/index'
import Header from '../component/header';
// import Landing from '../component/dashbaoard';
import Register from './login/register'
import Login from './login/login'
import PrivateRoute from './privateRoute'
import CompanyDashboard from '../component/company/companyDashboard'
import PostedJob from '../component/company/postedJob'
import StudentDashboard from '../component/student/studentDashbaoard'
import AllJobs from '../component/centralizeComponent/allJob'
import AllStudent from '../component/admin/allStudent'
import AllCompany from '../component/admin/allCompany'
import Companies from '../component/student/companies'
// if (localStorage.jwtToken) {
//     // Set auth token header auth
//     const token = localStorage.jwtToken;
//     setAuthToken(token);
//     // Decode token and get user info and exp
//     const decoded = jwt_decode(token);
//     // Set user and isAuthenticated
//     store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//     const currentTime = Date.now() / 1000; // to get in milliseconds
//     if (decoded.exp < currentTime) {
//       // Logout user
//       store.dispatch(logout());
//       // Redirect to login
//       window.location.href = "./login";
//     }
//   }

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }
    render() { 
        return ( 
            <React.Fragment>
            
                <Router>
                    <Header />
                    <Switch> 
                        {/* <Route exact path='/' component={Landing}  /> */}
                        <Route exact path='/login' component={Login}  />
                        <Route exact path='/' component={Register}  />
                        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
                        {/* <PrivateRoute exact path="/studentDashboard" component={StudentDashboard} /> */}
                        <Route exact path="/studentDashboard" component={StudentDashboard} />
                        <Route exact path="/companyDashboard" component={CompanyDashboard} />
                        <Route exact path="/allJob" component={AllJobs} />
                        <Route exact path="/allStudent" component={AllStudent} />
                        <Route exact path="/allCompany" component={AllCompany} />
                        <Route exact path="/companies" component={Companies} />
                        <Route exact path="/postedJob" component={PostedJob} />
                    </Switch>
                </Router>
            </React.Fragment>
         );
    }
}
 
export default Routes;