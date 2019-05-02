import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
import { Jumbotron,Spinner } from 'reactstrap';


class CompanyJob extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allounce: '',
            descrip: '',
            salary: '',
            title:'',
            loading: true
         }
    }
    componentDidMount() {
        this.setState({
            loading: false
        })
    }
    render() { 
        return ( 
            this.state.loading === true ?
            <Spinner style={{marginLeft: "50%", marginTop: "25%"}} color='info'/>
            :
            <React.Fragment>
                  <Jumbotron>
               

               <h1>Company dashboard</h1>    
               {/* <ul>
               <li>  <Link to='/allStudent' >all Students </Link> </li>
               <li> <Link to='/allCompany' >all Company</Link> </li>
               <li><Link to='/postedJob' >All Job</Link> </li>
                   
               </ul> */}
               {/* <Link to='/allJob' >all jobs</Link> */}
              
               </Jumbotron>
                {/* <li><Link to='/companyDashboard' >Post A job</Link> </li> */}
                {/* <li> <Link to='/allStudent' >View Student List</Link></li> */}
                {/* <li> <Link to='forCompany' >View Posted Job</Link></li> */}
                
                
                
            </React.Fragment>
         );
    }
}
 
export default CompanyJob