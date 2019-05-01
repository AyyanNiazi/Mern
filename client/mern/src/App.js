import React, { Component } from 'react';
import Routes from './container/routes'
import { Provider } from 'react-redux'
// import {loadUser} from './store/action/authAction'
import store from './store/index'



class App extends Component {

  componentDidMount() {
    // store.dispatch(loadUser());

  }

  render() {
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    );
  }
}

export default App;
