import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,CardHeader, Container, Row, Col, Card, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import registerUser from '../../store/action/authAction';

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
                                <Form  onSubmit={this.onSubmit} >
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" required
                                        onChange={this.onChange} error={errors.name}
                                        value={name} id="name" placeholder="write your good Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" required
                                        onChange={this.onChange} error={errors.email}
                                        value={email} id="email" placeholder="write a Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="pass">Password</Label>
                                        <Input type="password" name="password" required
                                        onChange={this.onChange} error={errors.password} 
                                        value={pass}  id="pass" placeholder="Password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="pass2">Confirm Password</Label>
                                        <Input type="password" name="password" required
                                        onChange={this.onChange} error={errors.password2}
                                        value={pass2} id="pass2" placeholder="Confirm Password" />
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

export default Register;