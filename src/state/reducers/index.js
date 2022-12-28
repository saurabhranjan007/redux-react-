
// combining all the reducers 

import { combineReducers } from "redux"
import accountReducer from './accontReducer'

// console.log("account_from_redux : ", accountReducer);

// "combineReducers" 
//  - is a function that takes in an object of all the reducers that we want to combine 
//  - it takes the object as a key value pair where we can call the variable/key whatever we want (it will also be the access param)
//  - and the value is whatever is returned by the reducer. 
//  - here in this case - "account" is the key and "accountReducer" is the value corresponsing to the key
             

const reducers = combineReducers({
    account: accountReducer, 
})


export default reducers; 