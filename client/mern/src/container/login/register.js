import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,CardHeader, Container, Row, Col, Card, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {registerUser} from '../../store/action/authAction';
import classnames from 'classnames'
import './login.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            pass2: '',
            errors: {}
        }
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
    onSubmit = (e) => {
        const {name,pass,pass2,email} = this.state
        e.preventDefault();
          //new user
        const newUser = {
            name,
            email,
            pass,
            pass2
        }

        this.props.registerUser(newUser, this.props.history);
        this.setState({
            name: '',
            email: '',
            pass: '',
            pass2: '',
        })

        console.log("new user from register: ", newUser)
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
                                <Form  noValidate onSubmit={(e) => this.onSubmit(e)} >
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" required
                                        onChange={this.onChange} error={errors.name}
                                        value={name} id="name" placeholder="write your good Name" 
                                        className={classnames("", {
                                            invalid: errors.name
                                          })} />
                                            <span className="red-text">{errors.name}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" required
                                        onChange={this.onChange} error={errors.email}
                                        value={email} id="email" placeholder="write a Email"
                                        className={classnames("", {
                                            invalid: errors.email
                                          })} />
                                     <span className="red-text">{errors.email}</span>

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="pass">Password</Label>
                                        <Input type="password" name="password" required
                                        onChange={this.onChange} error={errors.password} 
                                        value={pass}  id="pass" placeholder="Password"
                                        className={classnames("", {
                                            invalid: errors.password
                                          })} />
                                              <span className="red-text">{errors.password}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="pass2">Confirm Password</Label>
                                        <Input type="password" name="password" required
                                        onChange={this.onChange} error={errors.password2}
                                        value={pass2} id="pass2" placeholder="Confirm Password"
                                        className={classnames("", {
                                            invalid: errors.password2
                                          })} />
                                                          <span className="red-text">{errors.password2}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button color="danger" type="submit" className=" button text-right" >Signup</Button>
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
    auth: state.auth,
    errors: state.errors
  });
const mapDispatchToProps = dispatch => {
    return {
        registerUser: userData => {
            dispatch(registerUser(userData))
        }
    }
}

export default connect(mapStateToProps,{registerUser})(withRouter(Register));