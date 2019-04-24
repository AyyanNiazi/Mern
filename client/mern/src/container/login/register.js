import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,CardHeader, Container, Row, Col, Card, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import PropTypes from'prop-types';
import {registerUser} from '../../store/action/authAction';
import {clearErros} from '../../store/action/errorAction';
import classnames from 'classnames'
import axios from 'axios'
import './login.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            pass2: '',
            errors: null,
            selector:''
        }
    }

    componentDidUpdate(prevProps){
        const {errors} = this.props; //this is coming from store reducer
        if(errors !== prevProps.errors){
            if(errors.id === 'REGISTER_FAIL'){
                this.setState({
                    errors:errors.msg.msg
                })
            }
            else{
                this.setState({
                    errors:null
                })
            }
        }
    }
    static propTypes = {
        isAuth: PropTypes.bool,
        errors: PropTypes.object.isRequired,
        registerUser: PropTypes.func.isRequired,
        clearErros: PropTypes.func.isRequired
    }

    onChange= (e) => {
        this.setState({ [e.target.id]: e.target.value  })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    onSubmit = e => {
        const {name,pass,selector,email} = this.state
        e.preventDefault();
          //new user
          if(selector === "student"){ 
        const newUser = {
            name,
            email,
            pass,
            selector
            // pass2
        }
      axios.post('/api/register',newUser)
      .then(res => {console.log("register say", res.data.user.selector)
        localStorage.setItem('token', res.data.token)
    })
      .catch(err => console.log("resgitr sy erro", err.message))        
        
        // this.props.registerUser(newUser);    
        console.log("new user from register: ", newUser)
        
    }
    else if(selector === "company"){
        const newUser = {
            name,
            email,
            pass,
            selector,
            // pass2
        }
        this.props.registerUser(newUser, this.props.history);    
        console.log("new user from register: ", newUser)
        
    }

        // this.setState({
        //     name: '',
        //     email: '',
        //     pass: '',
        //     pass2: '',
        // })

        // console.log("new user from register: ", newUser)
    }

  

    render() {
        const {name,email,pass,pass2,errors} = this.state
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card body>
                                <CardHeader className="card-head" >Register</CardHeader>
                                <Form  noValidate onSubmit={ this.onSubmit} >
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" required
                                        onChange={this.onChange} 
                                        value={name} id="name" placeholder="write your good Name" 
                                        className={classnames("", {
                                            // invalid: errors.name
                                          })} />
                                            {/* <span className="red-text">{errors.name}</span> */}
                                    </FormGroup>
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
                                         
                                        value={pass} 
                                        onChange={this.onChange} id="pass" placeholder="Password"
                                        className={classnames("", {
                                            // invalid: errors.password
                                          })} />
                                              {/* <span className="red-text">{errors.password}</span> */}
                                    </FormGroup>
                                  <select
                                      value={this.state.selector}
                                      onChange={(e) => this.setState({selector: e.target.value})}>

                                        <option value="">User type</option>
                                        <option value="student">student</option>
                                        <option value="company">company</option>
                                  </select>
                                  
                                    {/* {this.state.errors ? ("you entered wrong data" , this.state.errors ): null} */}
                                    <Button color="danger" className="button text-left "><Link to='/login' >Login</Link></Button>
                                    <FormGroup>
                                        <Button color="danger" type="submit" className=" button text-left" >Signup</Button>
                                    </FormGroup>
                                  
                                    
                                </Form>
                            </Card >
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

//redux
const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth,
    errors: state.errorReducer
  });

export default connect(mapStateToProps,{registerUser})(withRouter(Register));