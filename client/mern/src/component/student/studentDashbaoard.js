import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import AllJobs from '../centralizeComponent/allJob'
import { newJob } from '../../store/action/companyAction'
// import classnames from 'classnames'
import {
    // Button, Form, FormGroup, Label, Input, CardHeader, Card,
    // Modal, ModalHeader, ModalBody, ModalFooter,Table
    Jumbotron, Spinner
} from 'reactstrap';


class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            allounce: '',
            descrip: '',
            salary: '',
            errors: '',
            title: '',
            name: 'student',
            email: 'student@gmail.com',
            socialProfile: '',
            loading: true

        };

    }
   
componentDidMount(){
    this.setState({
        loading: false
    })
}
    // onSubmit = e => {
    //     e.preventDefault();
    //     const { title, salary, descrip, allounce } = this.state

    //     const newjob = {
    //         title,
    //         salary,
    //         descrip,
    //         allounce,
    //     }
    //     console.log(newjob);
    //     this.props.newJob(newjob)
    // }

    // toggle() {
    //     this.setState(prevState => ({
    //         modal: !prevState.modal
    //     }));
    // }
    render() {
        const { title, salary, descrip, allounce } = this.state
        return (
            this.state.loading === true ?
            <Spinner style={{marginLeft: "50%", marginTop: "25%"}} color='info'/>
            :
            <div  >
             <Jumbotron>
               

               <h1>Student dashboard</h1>    
               {/* <ul>
               <li>  <Link to='/allStudent' >all Students </Link> </li>
               <li> <Link to='/allCompany' >all Company</Link> </li>
               <li><Link to='/postedJob' >All Job</Link> </li>
                   
               </ul> */}
               {/* <Link to='/allJob' >all jobs</Link> */}
              
               </Jumbotron>
                {/* <Link to='/allJob' > All Job  </Link> */}
                {/* <Link to='/companies' > All Companies  </Link> */}
            </div>
        );
    }
}


export default connect(null, { newJob })(StudentDashboard);