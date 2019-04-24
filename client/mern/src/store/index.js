import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer'

const middleware = [thunk]

const store = createStore(
    rootReducer, /* preloadedState, */
    {},
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

)

export default store