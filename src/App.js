// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';

import { useSelector, useDispatch } from 'react-redux' 
import { bindActionCreators } from "redux"
import { actionCreators } from './state/index'


// to access the data inside of <React /> components we use a soecial hook, provided by "redux" called "useSelector()"

function App() {

  // to use we need to follow this ⏬ syntax. 
  //    - 1. we first specify the state (this is the 1st state - which is the state inside of the redux store)
  //    - 2. then we provide a call back function which return the state from the store (so the above defined state)
  //    - ## > const state ("- state inside the store") = useSelector((state "- just a param") => state - ("the value of the state we get from the store - form redux")); 
  //    - >> this state here will return all the reducers defined - flow is from store > go to reducers > go to individual reducer.. 
  //          ->> once it goes to the "reducers" (here inside the reducers-index.js) it returns the value of all the reducers that are combined 
  //          ->>     - in a key value pair (here, since there is only one - so accont: accountReducer >> since init state is zero so account: 0)

  const state = useSelector((state) => state); 
  console.log("state -- ", state);

  // if form a list of reducers we want to access some and not the whole reducers list, then we can just add "state.reducer_key_name in callback func"
  const account = useSelector((state) => state.account)
  console.log("state.account : ", account);

  // using useDispatch() - we are dispatching actions and manipulating the contents here 
  //   -- once we have the all action creators from redux, we need to bind them using "bindActionCreators"

  const dispatch = useDispatch();
  // console.log("dispatch - ", dispatch);

  // binding all the action creators - ⏬ 
  // const bind_actions = bindActionCreators(actionCreators, dispatch)
  // console.log("bind_actions : ", bind_actions);

  // destructuring actions from action_creators 
  const { depositMoney, withdrawMoney } =  bindActionCreators(actionCreators, dispatch)
  // console.log("deposit_action : ", depositMoney);
  // console.log("withdraw_action : ", withdrawMoney);


  return (

    <div className='App'>

      <h1>Classic Redux Bank</h1>

      <div>
        <h2>{account}</h2>
        {/* ------>>> binding the deposit and withdraw actions to the button click event here.. */}
        <button onClick={() => depositMoney(100)}>Deposit</button>
        <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      </div>

    </div>

  );
}

export default App;
