import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import { Button, Jumbotron, Spinner } from 'reactstrap'

class AllCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyData: [],
            studentData: [],
            loading: true,
            evein: true,
            admin: ''


        }
    }


    componentDidMount() {
        const getitem = JSON.parse(localStorage.getItem('state'))
        try{
            const admin = getitem.authReducer.authUser.user === "admin"
            this.setState({
                admin
            })
        }   
        catch(e){
            console.log(e)
        }

        axios.get('http://localhost:5000/api/allCompany')
            .then(res => {
                const company = res.data.filter(e => {
                    return e.userType === "company"
                })
                this.setState({
                    // studentData: student,
                    companyData: company,
                    loading: false
                })

                console.log(company, "company")
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
        axios.delete("/api/admindel", email)
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
                                    <p>Comapny : {index+1}</p>
                                    <p> name: {elem.name}</p>
                                    <p> email:  {elem.email}</p>
                                    {/* <p> user Type:   {elem.userType}</p> */}
                                    {this.props.auth.authUser.user === "admin"
                                    ||
                                    this.state.admin ? 
                                    <Button color='danger' onClick={this.delete.bind(this, elem.email, index)} > Delete </Button> 
                                    : null}
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
        auth: state.authReducer,
        
    }
}
export default connect(mapStateToProps, null)(AllCompany);