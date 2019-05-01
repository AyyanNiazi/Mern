import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer'


const middleware = [thunk]

function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    }
    catch(e){
        console.log("state store sy ", e.message)
        return undefined
    }
}

const store = createStore(
    rootReducer, /* preloadedState, */
    {},
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

)

store.subscribe( () => saveToLocalStorage(store.getState()) )


export default store