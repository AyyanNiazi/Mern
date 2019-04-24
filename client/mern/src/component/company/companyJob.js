import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input,CardHeader, Container, Row, Col, Card, are } from 'reactstrap';


class CompanyJob extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allounce: '',
            descrip: '',
            salary: '',
            title:'',
         }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                <Container>
                    <Row>
                        <Col>
                            <Card body>
                                <CardHeader className="card-head" >Register</CardHeader>
                                <Form  noValidate onSubmit={ this.onSubmit} >
                                    <FormGroup>
                                        <Label for="title">Title</Label>
                                        <Input type="text" name="title" required
                                        onChange={this.onChange} 
                                        value={title} id="title" placeholder="write Title" 
                                        className={classnames("", {
                                            // invalid: errors.name
                                          })} />
                                            {/* <span className="red-text">{errors.name}</span> */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="salary">salary</Label>
                                        <Input type="number" name="salary" required
                                        onChange={this.onChange} 
                                        value={salary} id="salary" placeholder="Salary"
                                        className={classnames("", {
                                            // invalid: errors.email
                                          })} />
                                     {/* <span className="red-text">{errors.email}</span> */}

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="allounce">If Allounce</Label>
                                        <Input type="text" name="allounce" 
                                         
                                        value={allounce} 
                                        onChange={this.onChange} id="allounce" placeholder="allounce"
                                        className={classnames("", {
                                            // invalid: errors.password
                                          })} />
                                              {/* <span className="red-text">{errors.password}</span> */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="descrip">Description optional</Label>
                                        <Input type="textarea" name="descrip" 
                                        value={allounce} 
                                        onChange={this.onChange} id="descrip" placeholder="Description"
                                        className={classnames("", {
                                            // invalid: errors.password
                                          })} />
                                              {/* <span className="red-text">{errors.password}</span> */}
                                    </FormGroup>
                                  {/* <select
                                      value={this.state.selector}
                                      onChange={(e) => this.setState({selector: e.target.value})}>

                                        <option value="">User type</option>
                                        <option value="student">student</option>
                                        <option value="company">company</option>
                                  </select> */}
                                  
                                    {/* {this.state.errors ? ("you entered wrong data" , this.state.errors ): null} */}
                                    <FormGroup>
                                        <Button color="danger" type="submit" className=" button text-right" >Signup</Button>
                                    </FormGroup>
                                </Form>
                            </Card >
                        </Col>
                    </Row>
                </Container>
            </div>
            </React.Fragment>
         );
    }
}
 
export default CompanyJob;