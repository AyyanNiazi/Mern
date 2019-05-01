import React,{Component} from 'react';
import {BrowserRouter as Router,
    Redirect,
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
import AdminRoute from './adminRoute'
import CompanyDashboard from '../component/company/companyDashboard'
import CompanyMain from '../component/company/companyMain'
import ForCompany from '../component/company/forCompany'
import PostedJob from '../component/centralizeComponent/fresh'
import StudentDashboard from '../component/student/studentDashbaoard'
import AllJobs from '../component/centralizeComponent/allJob'
import AllStudent from '../component/admin/allStudent'
import AllCompany from '../component/admin/allCompany'
import Companies from '../component/student/companies'
import AdminDashboard from '../component/admin/adminDashboard';
import privateRoute from './privateRoute';
import { timingSafeEqual } from 'crypto';


class Routes extends Component {
    constructor(props) {
        let getitem = JSON.parse(localStorage.getItem('state'));
        super(props);
        this.state = { 
            local: false,
            student: false,
            company: false,
            admin: false,
            evein:false,
            storage: getitem
         }

    }
    componentWillReceiveProps(nextprops){
        console.log(nextprops)
    }
     componentDidMount(){
    const getitem = JSON.parse(localStorage.getItem('state'));

    try{
    console.log(getitem.authReducer)
        this.setState({
            storage: getitem.authReducer.isAuth === true
        })

        const user = getitem.authReducer.isAuth === true;
        const student = getitem.authReducer.authUser.selector === "student"
        const company = getitem.authReducer.authUser.selector === "company"
        const admin = getitem.authReducer.authUser.user === "admin"
        this.setState({
            user: user
        })
        // const student = getitem.authReducer.authUser.selector === "student"
        if(user && student){
            // window.location.reload();
            console.log(getitem.authReducer.isAuth === true);

            this.setState({
                local: true,
                student: true,
            },() => {
                // localStorage.setItem('path',window.location.pathname);
                // this.props.history.replace('/studentDashboard')
                console.log(this.state);
                return (
                    <Redirect to='/studentDashboard' />)
            })
           console.log(this.state.local)
            
        }

        else if (user && company){
            this.setState({
                local: true,
                redirect: true,
            },() => {
                // localStorage.setItem('path',window.location.pathname);
                // this.props.history.replace('/studentDashboard')
                console.log(this.props)
            })       
         }

         else if (user && admin){
            this.setState({
                local: true,
                redirect: true,
            },() => {
                // localStorage.setItem('path',window.location.pathname);
                // this.props.history.replace('/studentDashboard')
                console.log(this.props)
            })       
         }
   
       

    }
   catch(e){
       console.log(e)
   }

   console.log(this.props)
       
        
    }
    
    render() { 
        const {student,local,company,admin} = this.state
        // if(student && local){
        //     return (
        //         <Redirect to='/studentDashboard' />
        //     )
        // }

        return ( 
            <React.Fragment>
            
                <Router>
                    <Header />

                        {
                            this.state.local === false ?
                            <div>
                            <Route exact path='/login' component={Login}   />
                            <Route exact path='/' component={Register}  />
                            </div>
                            :
                            <div> 
                            <Route exact path="/studentDashboard" component={StudentDashboard} />
                        <Route exact path="/adminDashboard" component={AdminDashboard} />
                        <Route exact path="/companyDashboard" component={CompanyDashboard} />
                        <Route exact path="/forCompany" component={ForCompany} />
                        <Route exact path="/companyMain" component={CompanyMain} />
                        <Route exact path="/allJob" component={AllJobs} />
                        <Route exact path="/allStudent" component={AllStudent} />
                        <Route exact path="/allCompany" component={AllCompany} />
                        <Route exact path="/companies" component={Companies} />
                        <Route exact path="/postedJob" component={PostedJob} />
                        </div>
                        }

                       
                        
                </Router>
            </React.Fragment>
         );
    }
}
 
export default Routes;