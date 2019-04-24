import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import axios from 'axios';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companyData: [],
            studentData: [],
            
         }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/Companies')
        .then(res => {
            const company = res.data.filter(e => {
                return e.userType === "company"
            })
            this.setState({
                // studentData: student,
                companyData: company
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
                 {this.state.companyData.map(elem => {
                    
                    // return e.map(elem => {
                        return (
                            <div> 
                                <li>shauhus</li>
                                <li>{elem.name}</li>
                                <li>{elem.email}</li>
                                <li>{elem.userType}</li>
                            </div>
                        )
                    // })
                   
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
export default connect(mapStateToProps,null)(Companies);