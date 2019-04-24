import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,CardHeader, Container, Row, Col, Card, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import PropTypes from'prop-types';
// import {login} from '../../store/action/authAction';
import {clearErros} from '../../store/action/errorAction';
import classnames from 'classnames'
import './login.css'
import axios from 'axios'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            errors: null,
            selector: '',
        }
    }

    componentDidUpdate(prevProps){
        const {errors} = this.props; //this is coming from store reducer
        if(errors !== prevProps.errors){
            if(errors.id === 'LOGIN_FAIL'){
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
        login: PropTypes.func.isRequired,
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
        const {name,pass,pass2,email,selector} = this.state
        e.preventDefault();
          //new user
        const user = {
            email,
            pass,
        }
        axios.post('/api/login',user)
        .then(res => {
            if(res.data.student === "student" && selector === "student"){ 
            this.props.history.push('/studentDashboard');
            }
            else if (res.data.company && selector === "company"){
            this.props.history.push('/companyDashboard');
                
            }
            console.log(res.data.student)
        })
        .catch(err => console.log("login sy error", err.message))
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
                                <Form  noValidate onSubmit={ this.onSubmit} >
                                   
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
                                    <select
                                      value={this.state.selector}
                                      onChange={(e) => this.setState({selector: e.target.value})}>

                                        <option value="">User type</option>
                                        <option value="student">student</option>
                                        <option value="company">company</option>
                                  </select>
                                    {/* {this.state.errors ? ("you entered wrong data" , this.state.errors ): null} */}
                                    <FormGroup>
                                        <Button color="danger" type="submit" className=" button text-right" >Login</Button>
                                    </FormGroup>
                                    <Button color="danger" className="button text-left "><Link to='/' >Register</Link></Button>

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

export default connect()(withRouter(Login));