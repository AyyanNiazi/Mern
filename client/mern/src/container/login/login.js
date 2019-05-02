import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,CardHeader, Container, Row, Col, Card, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import PropTypes from'prop-types';
import {auth} from '../../store/action/authAction';
// import {clearErros} from '../../store/action/errorAction';
import classnames from 'classnames'


import './login.css'
import axios from 'axios'
// import { newJob } from '../../store/action/companyAction';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            evein: false,
            errors: null,
            selector: '',
            errors: '',
            auth: false
        }
    }

    // componentDidUpdate(prevProps){
    //     const {errors} = this.props; //this is coming from store reducer
    //     if(errors !== prevProps.errors){
    //         if(errors.id === 'LOGIN_FAIL'){
    //             this.setState({
    //                 errors:errors.msg.msg
    //             })
    //         }
    //         else{
    //             this.setState({
    //                 errors:null
    //             })
    //         }
    //     }
    // }

   

    static propTypes = {
        isAuth: PropTypes.bool,
        errors: PropTypes.object.isRequired,
        auth: PropTypes.func.isRequired,
        clearErros: PropTypes.func.isRequired
    }

    onChange= (e) => {
        this.setState({ [e.target.id]: e.target.value  })
    }
    // componentWillReceiveProps(nextProps) {
    //     // if (nextProps.errors) {
    //     //   this.setState({
    //     //     errors: nextProps.errors
    //     //   });
    //     // }

    //     console.log(nextProps.auth.isAuth);
    //     if(nextProps.auth.isAuth === false){
    //         this.setState({
    //            auth: true
    //         })
    //     }
    //   }

    //   componentDidMount(){
    //     this.setState({
    //         auth: true
    //      })
    //   }
    onSubmit = e => {
        const {pass,email,selector} = this.state
        e.preventDefault();
          //new user
        const user = {
            email,
            password:pass,
            selector,
        }

        // const authUser = {user: "user"}
        // this.props.auth(authUser)
        // this.props.history.push('/studentDashboard')
        // console.log(user);
        if(email === "admin@gmail.com" && pass === "admin123"){
           const authUser={user: "admin"}
            this.props.auth(authUser)  
            this.props.history.push('/adminDashboard')
        }
//         if(selector === "student"){
//             const authUser={user: "user"}
//             this.props.auth(authUser)
// console.log(this.props.auth(authUser))
//             this.props.history.push('/studentDashboard');
//          }
       
        axios.post('http://localhost:5000/api/login',user)
        .then(res => {
            console.log(res.data.user.selector)
            if( selector === "student"  && res.data.user.selector === "student" ){ 
               
                const authUser={user: "user",selector}            
                this.props.auth(authUser)

            this.props.history.push('/studentDashboard');
            }
            else if ( selector === "company" &&  res.data.user.selector === "company"){
               const authUser={user: "user", selector}
            this.props.auth(authUser)
         console.log(this.props.auth(authUser))
            this.props.history.push('/companyMain');
                
            }
            else{
                this.setState({
                    errors: "Please Select valid user type"
                })
            }
            console.log(res.data.student)
            // this.props.auth()
        })
        .catch(err => {console.log("login sy error", err.message)
        this.setState({
            errors: err.message
        })
    })
        // this.props.login(user, this.props.history);
        // this.setState({
        //     name: '',
        //     email: '',
        //     pass: '',
        //     pass2: '',
        // })

        console.log("new user from login: ", user)
    }

  

    render() {
        const {name,email,pass,pass2,errors} = this.state
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card body>
                                <CardHeader className="card-head" >Login</CardHeader>
                                <Form  onSubmit={ this.onSubmit} >
                                   
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" required
                                        onChange={this.onChange} 
                                        value={email} id="email" placeholder="write a Email"
                                        className={classnames("", {
                                            // invalid: errors.email
                                          })} />
                                     {/* <span className="red-text">{errors.email}</span> */}

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="pass">Password</Label>
                                        <Input type="password" name="password" required
                                        onChange={this.onChange} 
                                        value={pass}  id="pass" placeholder="Password"
                                        className={classnames("", {
                                            // invalid: errors.password
                                          })} />
                                              {/* <span className="red-text">{errors.password}</span> */}
                                    </FormGroup>
                                    <FormGroup> 
                                    <Input type="select"
                                      value={this.state.selector}
                                      onChange={(e) => this.setState({selector: e.target.value})}>

                                        <option value="">User type</option>
                                        <option value="student">student</option>
                                        <option value="company">company</option>
                                  </Input>
                                  </FormGroup>
                                  <div style={{color: 'red'}} > {this.state.errors ? <p>  Error from server please insert Right information or check your Data connection </p> : null } </div>
                                    {/* {this.state.errors ? ("you entered wrong data" , this.state.errors ): null} */}
                                    <FormGroup>
                                        <Button color="danger" type="submit" className=" button text-right" >Login</Button>
                                    </FormGroup><br/>
                                    <FormGroup>
                                    {/* <Button color="danger" className="button "><Link to='/' >Register</Link></Button> */}

                                    </FormGroup>

                                </Form>
                            </Card >

                            {/* <Link to='/studentDashboard' >Student dahsboard</Link> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

//redux
// const mapDispatchtoprops = dispatch => {
//     return {
//         auth : auth => dispatch(auth)
//     }
//   };

export default connect(null, {auth})(withRouter(Login));