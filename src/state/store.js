
import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers/index" // we need all of our reducers to create a store 

import thunk from 'redux-thunk'


// store doesn't necessarily take objects, here we need to pass the Reducers (reducers) as 1st param and a default value as 2nd.  


const store = createStore(
    reducers, 
    {},
    applyMiddleware(thunk)
) 


export default store; 


// Once store is created we actually hook the store to the React App in order to access these redux properties in our app. 
//      - we do this by wrapping the <App /> component in "Provider" and passing the store as a param inside of it.