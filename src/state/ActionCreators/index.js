// Action Creator - 
        // basically is a function that dispatches an action to the reducer and then 
        // reducer goes and interprets the action and then manipulates the store 

// Here we need to create two action 1. for deposit and 2. for withdraw. We can also create multiple action files to diff actions. 


// These actions (functions) will be accessible through out the application, based on the params passed the value of the state will change from the reducer 

// Syntax ⏬: here action_creator returns a function that has "dispatch" as a param (this dispatch comes from React App - using useDispatch() hook) inside of it. 
//      -- here in the return function we call the dispatch and with dispatch we return an object as action (dispatch object with "type" as one key and "payload" as another )

export const depositMoney =(amount) => {
    return(dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return(dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}
