import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import axios from 'axios';

import {
    Button, Form, FormGroup, Label, Input, CardHeader, Card,
    Modal, ModalHeader, ModalBody, ModalFooter,Jumbotron,Spinner
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
            loading: true,
            id:'',
            error: ''
         }
         this.toggle = this.toggle.bind(this);    
        // //  this.toggle = this.toggle.bind(this);    
        }

    componentDidMount(){
        axios.get('http://localhost:5000/api/alljob')
        .then(res => {
        let newArr = new Array();
            newArr.push(res.data)
            this.setState({
                jobData:newArr,
                loading: false
            })
            console.log(this.props.auth.authUser.user);
    })
        .catch(err => console.log("err job ka ui sy",err.message));
    }

    toggle(ids) {
        const {id}  = this.state
        console.log(ids)
        this.setState(prevState => ({
            modal: !prevState.modal,
            id:ids,

        }));
    }

onChange = (e) => {
    this.setState({ [e.target.id] : [e.target.value] })
}

    onSubmit = (e) => {
        e.preventDefault();
        const {name,email,socialMediaProfile,workingProfile,education,id} = this.state;
        console.log(id)
    const postedJob = {
            name,
            email,
            education,
            socialMediaProfile,
            workingProfile,
            id,
    }
console.log("job [pos", postedJob)

        
        axios.post('/api/postJob', postedJob)
        .then(res => {
            console.log(res,"response post wala");
            this.setState({
                modal: false
            })
        })
        .catch(err => {
            this.setState({
                error: err.message
            })
        })
    }
    

    delete = (email,index) => {
        let {jobData } = this.state
        console.log(email);
        axios.delete("api/admindel",email)
        .then(res => {
            // console.log("deleted",);

                jobData.splice(index,index+1);
                this.setState({
                    evein:false
                })
            // const filter = res.data( e => {
            //     return e.email !== email
            // })

        })
        .catch(err => console.log("err from delkte", err.message))
    }

    render() { 
        const {name,email,socialMediaProfile,workingProfile,education} = this.state;
        
        return ( 
          
            <div>
                 {  this.state.loading === true ?
                    <Spinner style={{marginLeft: "50%", marginTop: "25%"}} color='info' />
                    :
        <div>
                {this.state.jobData.map(e => {
                    
                    return e.map((elem,index) => {
                        return (
                            <div> 
                                <Jumbotron>

                                    <h1 className="display-3"> Job Title:  {elem.title}</h1>
                                    <p className="lead"> Salary:  {elem.salary}</p>
                                    <hr className="my-2" />
                                    <p> Allounces:  {elem.allounce}</p>
                                    <p> Descrip:  {elem.descrip}</p>
                                    <p> Descrip:  {elem.email}</p>
                                    <p> Descrip:  {index}</p>
                                    <p className="lead">
                                    {/* <p value={this.state.id === elem._id} > </p> */}

                                {  this.props.auth.authUser.user === "admin" ?

                                    <Button color="danger" onClick={this.delete.bind(this,elem.email,index)}> Delete  </Button>

                                    :
                                <Button color="primary" onClick={this.toggle.bind(this,elem._id)}> Apply  </Button>
                                // <Button color='danger' onClick={this.delete.bind(this,elem.email, index)} > Delete </Button>


                                }


                                {/* <Button color="primary">Learn More</Button> */}
                                    </p>
                               
                                {/* <button onClick={this.post.bind(this,elem.id)} > Apply </button> */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Post a Job</ModalHeader>
                    <ModalBody>
                        <Card body>
                            <Form noValidate onSubmit={ this.onSubmit} >
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
                                    <Label for="social">Social Media profile</Label>
                                    <Input type="text" name="social"

                                        value={socialMediaProfile}
                                        onChange={this.onChange} id="socialMediaProfile" placeholder="Any Social media profile"/>
                                       
                                    {/* <span className="red-text">{errors.password}</span> */}
                                </FormGroup>
                              
                                <FormGroup>
                                    <Label for="other">Social Media Profile</Label>
                                    <Input type="text" name="other" 
                                        value={workingProfile}
                                        onChange={this.onChange} id="workingProfile" placeholder="other profile"/>
                                       
                                    {/* <span className="red-text">{errors.password}</span> */}
                                </FormGroup>
                                <p style={{color:'red'}} >{this.state.error}</p>
                                {/* <select
                                      value={this.state.selector}
                                      onChange={(e) => this.setState({selector: e.target.value})}>

                                        <option value="">User type</option>
                                        <option value="student">student</option>
                                        <option value="company">company</option>
                                  </select> */}
{/* <p>{elem._id}</p> */}
                                {/* {this.state.errors ? ("you entered wrong data" , this.state.errors ): null} */}
                                <FormGroup>
                                    <Button color="primary"  type="submit" className=" button text-right" >Submit</Button>
                                </FormGroup>

                                <Button color="danger" onClick={this.toggle} >Cancel</Button>

                            </Form>
                        </Card >
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
                </Jumbotron>


                            </div>
                        )
                    })
                   
                })}
                
    </div> }
    </div>
         );

    }
}
 

//redux
const mapStateToProps = (state) => {
    console.log(state.authReducer.authUser.user)
    return {
        auth: state.authReducer
    }
}
export default connect(mapStateToProps,null)(AllJobs);