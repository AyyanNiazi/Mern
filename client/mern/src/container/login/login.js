import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input,CardHeader, Container, Row, Col, Card, FormText } from 'reactstrap';
import './login.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            pass: "",
            errors: {}
         }
    }

    onChange = e => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {email,pass} = this.state;

        const userData = {
            email,
            pass
        }

        console.log("Login user data: ", userData)
    }
    render() { 
        const {email,pass} = this.state;

        return ( 
           <div>
                 <Container>
                    <Row>
                        <Col>
                            <Card body>
                                <CardHeader className="card-head" >Register</CardHeader>
                                <Form onSubmit={this.onSubmitHandler} >
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email"
                                        onChange={this.onChange} value={email} id="email" placeholder="write a Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="pass">Password</Label>
                                        <Input type="password" name="password"
                                        onChange={this.onChange} value={pass} id="pass" placeholder="Password" />
                                    </FormGroup>
                                  
                                    <FormGroup>
                                        <Button color="danger" className=" button text-right" >Submit</Button>
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
 
export default Login;