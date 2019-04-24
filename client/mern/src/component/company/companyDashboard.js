import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { newJob } from '../../store/action/companyAction'
import classnames from 'classnames'
import {
    Button, Form, FormGroup, Label, Input, CardHeader, Card,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


class CompanyDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            allounce: '',
            descrip: '',
            salary: '',
            title: '',

        };

        this.toggle = this.toggle.bind(this);
    }
    onChange = e => {
        this.setState({ [e.target.id]: [e.target.value] })
    }

    onSubmit = e => {
        e.preventDefault();
        const { title, salary, descrip, allounce } = this.state

        const newjob = {
            title,
            salary,
            descrip,
            allounce,
        }
        console.log(newjob);
        this.props.newJob(newjob)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        const { title, salary, descrip, allounce } = this.state
        return (
            <div>
                <Button color="danger" onClick={this.toggle}> Add Job </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Post a Job</ModalHeader>
                    <ModalBody>
                        <Card body>
                            <Form noValidate onSubmit={this.onSubmit} >
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
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>                {/* <Link to="companyJob">   </Link> */}
            </div>
        );
    }
}


export default connect(null, { newJob })(CompanyDashboard);