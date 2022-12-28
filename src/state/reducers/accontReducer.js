// reducer takes two params 1. initial state, 2. action (defines what to do. so it houses the action type and potential payload)
// conditional statements can be handled using if-else but we use switch statements (general convention)

const reducer = (state=0, action) => {

    switch(action.type) {

        case "deposit": 
            return state + action.payload; 
            // this will add the payload to the current state (init - zero)
        
        case "withdraw":
            return state - action.payload; 
            // this will subtract the payload value from the current state, (init - zero so will return -ve value)

        default:
            return state; 
    }
}

export default reducer; 

// Once we have created all the reducers the next step is to combine the reducers into one (we basically store all the reducers at one place)