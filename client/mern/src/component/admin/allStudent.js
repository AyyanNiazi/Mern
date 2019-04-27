import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import axios from 'axios';
import {Button,Jumbotron} from 'reactstrap'
import {Spinner} from 'reactstrap'

class AllStudent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            studentData: [],
            loading: true,
            evein: false,
            
         }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/allStudent')
        .then(res => {
            const student = res.data.filter(e => {
                return e.userType === "student"
            })
            this.setState({
                studentData: student,
                loading: false
            })

         

           
            console.log("student",student);


    })
        .catch(err => console.log("err job ka ui sy",err.message));
    }

    delete = (email,index) => {
        let {studentData } = this.state
        console.log(email);
        
        axios.delete("/api/admindel",email)
        .then(res => {
            console.log("deleted", typeof res.data.user);

                studentData.splice(index,index+1);
                this.setState({
                    evein:false
                })
            // const filter = res.data( e => {
            //     return e.email !== email
            // })

        })


        .catch(err => console.log("err from delkte", err.message))
    }

    render() { 
        return ( 
            <div>
                 {this.state.loading === true ?
                    <Spinner style={{marginLeft: "50%", marginTop: "25%"}} color='info' />
                    :<div>
                 {this.state.studentData ? this.state.studentData.map((elem,index) => {
                    
                    // return e.map(elem => {
                        return (
                           
                                <Jumbotron> 
                                <p> {index+1} </p>
                                <p> name: {elem.name}</p>
                                <p> email:  {elem.email}</p>
                                <p> user Type:   {elem.userType}</p>
                                {this.props.auth.authUser.user === "admin" ? 
                                    <Button color='danger' onClick={this.delete.bind(this, elem.email, index)} > Delete </Button> : null}
                                </Jumbotron>
                        )
                    // })
                   
                }) :  <h1> no student found</h1> } </div>}
                
                
                   
                
            </div>
         );
    }
}
 

//redux
const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}
export default connect(mapStateToProps,null)(AllStudent);