import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import { Button, Jumbotron, Spinner } from 'reactstrap'

class PostedJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyData: [],
            studentData: [],
            loading: true,
            evein: true


        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/api/allPostJob')
            .then(res => {
                // const company = res.data.filter(e => {
                //     return e.userType === "company"
                // })
                this.setState({
                    // studentData: student,
                    companyData: res.data,
                    loading: false
                })

                console.log(res, "response")
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
        axios.delete("/api/postDel", email)
            .then(res => {
                console.log("deleted", res);
                companyData.splice(index,index+1);
                this.setState({
                    evein: false
                })
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
                                    <p>fresh sy</p>
                                    <p> name: {elem.name}</p>
                                    <p> email:  {elem.email}</p>
                                    <p> Education:   {elem.education}</p>
                                    <p> Social media profile:   {elem.socialMediaProfile}</p>
                                    <p> working profile:   {elem.workingProfile}</p>
                                    {this.props.auth.authUser.user === "admin" ?
                                    <Button color='danger' onClick={this.delete.bind(this, elem.email, index)} > Delete </Button> 
                                :
                                <Button color='primary' type="button" > Select Studentlo </Button> 
                                
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
        auth: state.authReducer
    }
}
export default connect(mapStateToProps, null)(PostedJob);