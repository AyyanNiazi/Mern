import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import axios from 'axios';
import {Jumbotron,Spinner,Button}  from 'reactstrap'
import { stat } from 'fs';

class PostedJob extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companyData: [],
            studentData: [],
            
         }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/newJob')
            .then(res => {
                // const company = res.data.filter(e => {
                //     return e.userType === "company"
                // })
                this.setState({
                    // studentData: student,
                    companyData: res.data,
                    loading: false
                })

                console.log(res.data, "company")
                // const student = res.data.filter(e => {
                //     return e.userType === "student"
                // })


                // console.log("student",student);


                // let newArr = new Array();
                // newArr.push(res.data)

                // this.setState({
                //     companyData:newArr
                // })
            })
            .catch(err => console.log("err job ka ui sy", err.message));
    }


    delete = (email, index) => {
        let {companyData} =  this.state;
        console.log(email)
        axios.post("http://localhost:5000/api/admindel", email)
            .then(res => {
                // console.log("deleted", res);
                // companyData.splice(index,index+1);
                // this.setState({
                //     evein: false
                // })
                // const filter = res.data.filter(e => {
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
                    : <div>
                        {this.state.companyData == [] ? <h1>no student found</h1> : <div> {this.state.companyData.map((elem, index) => {

                            // return e.map(elem => {
                            return (

                                <Jumbotron>
                                    <p> name: {elem.salary}</p>
                                    <p> email:  {elem.descrip}</p>
                                    <p> user Type:   {elem.allounce}</p>
                                    {this.props.auth.user === 'admin'?
                                    <Button color='danger' onClick={this.delete.bind(this, elem.email, index)} > Delete </Button>
                                    : null
                                }
                                </Jumbotron>
                            )
                            // })

                        })}</div>
                        } </div>
                }




            </div>
         );
    }
}
 

//redux
const mapStateToProps = (state) => {
    return {
        auth: state.authReducer.authUser
    }
}
export default connect(mapStateToProps,null)(PostedJob);