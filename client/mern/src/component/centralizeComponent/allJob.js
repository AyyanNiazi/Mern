import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import axios from 'axios';
import {
    Button, Form, FormGroup, Label, Input, CardHeader, Card,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class AllJobs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobData: [],
            modal: false,
            name:'',
            email: '',
            education: '',
            socialMediaProfile:'',
            workingProfile:'',
         }
         this.toggle = this.toggle.bind(this);    
        }

    componentDidMount(){
        axios.get('http://localhost:5000/api/alljob')
        .then(res => {
        let newArr = new Array();
            newArr.push(res.data)
            this.setState({
                jobData:newArr
            })
            console.log(this.state.jobData);
    })
        .catch(err => console.log("err job ka ui sy",err.message));
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

onChange = e => {
    this.setState({ [e.target.id] : [e.target.value] })
}

    onSubmit = e => {
        e.preventDefault();
        const {name,email,socialMediaProfile,workingProfile,education} = this.state;

    const postedJob = {
            name,
            email,
            education,
            socialMediaProfile,
            workingProfile,
    }
console.log("job [pos", postedJob)

    onsubmit = (id) => {
        axios.post('/api/postJob', postedJob)
        .then(res => {
            console.log(res,"response post wala");
            // this.setState
        })
        .catch(err => console.log("err post waala", err.message))
    }
    }

    render() { 
        const {name,email,socialMediaProfile,workingProfile,education} = this.state;
        return ( 
            <div>
                {this.state.jobData.map(e => {
                    
                    return e.map(elem => {
                        return (
                            <div> 
                                <li>{elem.title}</li>
                                <li>{elem.salary}</li>
                                <li>{elem.allounce}</li>
                                <li>{elem.descrip}</li>
                                {/* <button onClick={this.post.bind(this,elem.id)} > Apply </button> */}
                                <Button color="danger" onClick={this.toggle}> Add Job </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Post a Job</ModalHeader>
                    <ModalBody>
                        <Card body>
                            <Form noValidate onSubmit={this.onSubmit} >
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" required
                                        onChange={this.onChange}
                                        value={name} id="name" placeholder="write Name"
                                        />
                                    {/* <span className="red-text">{errors.name}</span> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" required
                                        onChange={this.onChange}
                                        value={email} id="email" placeholder="email"
                                         />
                                    {/* <span className="red-text">{errors.email}</span> */}

                                </FormGroup>
                                <FormGroup>
                                    <Label for="education">Education </Label>
                                    <Input type="text" name="education"

                                        value={education}
                                        onChange={this.onChange} id="education" placeholder="Education"/>
                                       
                                    {/* <span className="red-text">{errors.password}</span> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="social">Social Media Profile</Label>
                                    <Input type="text" name="social"
                                        value={socialMediaProfile}
                                        onChange={this.onChange} id="social" placeholder="Social Media profile"/>
                                       
                                    {/* <span className="red-text">{errors.password}</span> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="other">Social Media Profile</Label>
                                    <Input type="text" name="other" 
                                        value={workingProfile}
                                        onChange={this.onChange} id="other" placeholder="other profile"/>
                                       
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
                </Modal>

                            </div>
                        )
                    })
                   
                })}
                
            </div>
         );
    }
}
 

//redux
const mapStateToProps = (state) => {
    return {
        // newJob
    }
}
export default connect(mapStateToProps,null)(AllJobs);