import React,{Component} from 'react';
import {
    Button, Form, FormGroup, Label, Input, CardHeader, Card,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                 <Card body>
                            <Form noValidate onSubmit={this.onSubmit} >
                                <FormGroup>
                                    <Label for="title">Student name</Label>
                                    <Input type="text" name="title" required
                                        onChange={this.onChange}
                                        value={title} id="title" placeholder="write Title"
                                        className={classnames("", {
                                            // invalid: errors.name
                                        })} />
                                    {/* <span className="red-text">{errors.name}</span> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="salary">Student age</Label>
                                    <Input type="number" name="salary" required
                                        onChange={this.onChange}
                                        value={salary} id="salary" placeholder="Salary"
                                        className={classnames("", {
                                            // invalid: errors.email
                                        })} />
                                    {/* <span className="red-text">{errors.email}</span> */}

                                </FormGroup>
                                <FormGroup>
                                    <Label for="allounce">Educational Field</Label>
                                    <Input type="text" name="allounce"

                                        value={allounce}
                                        onChange={this.onChange} id="allounce" placeholder="allounce"
                                        className={classnames("", {
                                            // invalid: errors.password
                                        })} />
                                    {/* <span className="red-text">{errors.password}</span> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="descrip">Gender</Label>
                                    <Input type="textarea" name="descrip"
                                        value={descrip}
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

                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>

                            </Form>
                        </Card >

            </div>
         );
    }
}
 
export default StudentInfo;