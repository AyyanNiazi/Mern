import React, { Component } from 'react';
import Routes from './container/routes'
import {loadUser} from './store/action/authAction'

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUSer());
    
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
