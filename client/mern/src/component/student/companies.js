import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import {Jumbotron,Spinner} from 'reactstrap'
import axios from 'axios';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companyData: [],
            // studentData: [],
            loading: false
            
         }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/allCompany')
        .then(res => {
            const company = res.data.filter(e => {
                return e.userType === "company"
            })
            this.setState({
                // studentData: student,
                companyData: company,
                loading:true
            })

            console.log(company,"company")
            // const student = res.data.filter(e => {
            //     return e.userType === "student"
            // })

           
            // console.log("student",student);


            // let newArr = new Array();
            // newArr.push(res.data)
        
            // this.setState({
            //     companyData:newArr
            // })
    })
        .catch(err => console.log("err job ka ui sy",err.message));
    }

    render() { 
        return ( 
            <div>
                   {  this.state.loading === false ?
                    <Spinner style={{marginLeft: "50%", marginTop: "25%"}} color='info' />
                    :
                    <div>
                 {this.state.companyData.map((elem,index) => {
                    
                    // return e.map(elem => {
                        return (
                            <Jumbotron>
                            <p> Company:  {index+1}</p>
                            <p> Company Name: {elem.name}</p>
                            <p> Email:  {elem.email}</p>
                            {/* <p> user Type:   {elem.userType}</p> */}
                            {/* <Button color='danger' onClick={this.delete.bind(this, elem.email,)} > Delete </Button> */}
                             </Jumbotron>
                        )
                    // })
                   
                })}  </div>}
                
                
                   
                
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
export default connect(mapStateToProps,null)(Companies);