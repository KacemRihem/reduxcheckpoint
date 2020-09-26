import React from 'react';
import {createStore} from 'redux';

const initialState={
    count: 0
}

const Reduce=(state=initialState, action)=>{
    console.log('reducer', state, action);
    return state

    switch(action.type) {
        case 'INCREMENT':
          return {
            count: state.count + 1
          };
        case 'DECREMENT':
          return {
            count: state.count - 1
          };
        case 'RESET':
          return {
            count: 0
          };
        default:
          return state;
      }
}

const store = createStore(Reduce);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

export default Reduce;