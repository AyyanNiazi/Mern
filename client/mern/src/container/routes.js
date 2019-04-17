import React,{Component} from 'react';
import {BrowserRouter as Router,
Route, Link,Switch,Rout} from 'react-router-dom'
import Header from '../component/header';
import Landing from '../component/landing';
import Register from './login/register'
import Login from './login/login'
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }
    render() { 
        return ( 
            <div>
                <Router>
                    <Header />
                    <Switch> 
                        <Route exact path='/' component={Landing}  />
                        <Route exact path='/login' component={Login}  />
                        <Route exact path='/register' component={Register}  />
                    </Switch>
                </Router>
            </div>
         );
    }
}
 
export default Routes;