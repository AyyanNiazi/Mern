import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import axios from 'axios';

class AllStudent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companyData: [],
            studentData: [],
            
         }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/allStudent')
        .then(res => {
            const student = res.data.filter(e => {
                return e.userType === "student"
            })
            this.setState({
                studentData: student,
            })

         

           
            console.log("student",student);


    })
        .catch(err => console.log("err job ka ui sy",err.message));
    }

    delete = id => {

        axios.delete("/api/admindel",id)
        .then(res => {
            console.log("deleted", res);
            const filter = res.data.filter(e => {
                return e.id !== id
            })
        })
        .catch(err => console.log("err from delkte", err.message))
    }

    render() { 
        return ( 
            <div>
                 {this.state.studentData.map(elem => {
                    
                    // return e.map(elem => {
                        return (
                            <div> 
                                <li>{elem.name}</li>
                                <li>{elem.email}</li>
                                <li>{elem.userType}</li>
                                <button  onClick={this.delete.bind(this,elem.id)} > Delete </button>
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
export default connect(mapStateToProps,null)(AllStudent);