import React, { Component } from 'react';
import Routes from './container/routes'
import store from './store/index'
import {Provider} from 'react-redux'
import {loadUser} from './store/action/authAction'

class App extends Component {

  componentDidMount(){
    // store.dispatch(loadUser());
    
  }

  render() {
    return (
      <div className="App">
      <Provider store={store} >
        <Routes />
      </Provider>
      </div>
    );
  }
}

export default App;
