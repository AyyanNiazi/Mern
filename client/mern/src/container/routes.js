import React,{Component} from 'react';
import {BrowserRouter as Router,
    Redirect,Link,
Route, Switch} from 'react-router-dom';
import { Spinner } from 'reactstrap'
import {connect} from 'react-redux'
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
import Authorized from './authorized';
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
            storage: getitem,
            auth: false,
            authorized: false,
            loading: true,
         }

    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
     componentWillReceiveProps(nextProps) {
        console.log(nextProps.auth.isAuth);
        if(nextProps.auth.isAuth === true){
            this.setState({
                auth: true,
                local: true
            })
        }
        else if(nextProps.auth.isAuth === false){
            this.setState({
                auth: false,
                local: false
            })
        }
    }
    uploader(){
        const getitem = JSON.parse(localStorage.getItem('state'));
        // if(this.state.auth === false){
        //     this.setState({
        //         local: false
        //     })
        // }

    try{
    console.log(getitem.authReducer)
       
        const user = getitem.authReducer.isAuth === true;
        const student = getitem.authReducer.authUser.selector === "student"
        const company = getitem.authReducer.authUser.selector === "company"
        const admin = getitem.authReducer.authUser.user === "admin"
        this.setState({
            user: user
        })
        console.log("andar sy solve ")
        // const student = getitem.authReducer.authUser.selector === "student"
        if(user && student){
            // window.location.reload();
            console.log(getitem.authReducer.isAuth === true);

            this.setState({
                local: true,
                student: true,
                auth: true,
                authorized: true
            });
            
        }

        else if (user && company){
            this.setState({
                local: true,
                redirect: true,
                auth: true,
                authorized: true

            })       
         }

         else if (user && admin){
            this.setState({
                local: true,
                redirect: true,
                auth: true,
                authorized: true
            })       
         }
         else{
            this.props.history.replace('/login');
         }
             
   
       

    }
   catch(e){
       console.log(e)
   }

    }

     componentDidMount(){
        this.setState({
            loading: false
        })

         if(this.state.auth === false && this.state.local === false){
            this.setState({
                authorized: true,
            })
         }
         else 
        //  else{
        //      this.setState({
        //         authorized: false,

        //      })
        //  }
    this.uploader()
   console.log(this.props);
   
       
        
    }
    
    render() { 
        const {authorized,local,company,admin} = this.state
        // if(authorized === false){
        //     return (
        //         <Router> 
        //             <Redirect to='/authorized' />

        //         </Router>
        //     )
        // }
        console.log(this.state.local)
        console.log(this.state.auth)
        return ( 
            this.state.loading === true ?
            <Spinner  style={{marginLeft: "50%", marginTop: "25%"}} color='info' />
            :
            this.state.authorized === false ?
             <h1>Your are not authorized for this page</h1>
              : 
            <React.Fragment>
            
                <Router>
                    <Header />

                        {  
                            this.state.auth === false &&
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
 
//redux
const mapstatetoprops    = state => {
     return {
        auth: state.authReducer,
     }
 }
export default connect(mapstatetoprops,null)(Routes);