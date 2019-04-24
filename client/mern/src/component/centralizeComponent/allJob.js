import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux'
import axios from 'axios';

class AllJobs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobData: [],
         }
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

    render() { 
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
                                <button> Apply </button>
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