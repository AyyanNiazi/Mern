import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import axios from 'axios';
import {Button,Jumbotron} from 'reactstrap'
import {Spinner} from 'reactstrap'

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            studentData: [],
            loading: true,
            evein: false,
            
         }
    }

      
    render() { 
        return ( 
            <Jumbotron>
               

            <h1>admin dashboard</h1>    
            {/* <ul>
            <li>  <Link to='/allStudent' >all Students </Link> </li>
            <li> <Link to='/allCompany' >all Company</Link> </li>
            <li><Link to='/postedJob' >All Job</Link> </li>
                
            </ul> */}
            {/* <Link to='/allJob' >all jobs</Link> */}
           
            </Jumbotron>
         );
    }
}
 

//redux
const mapStateToProps = (state) => {
    return {
        // newJob
    }
}
export default connect(null,null)(AdminDashboard);