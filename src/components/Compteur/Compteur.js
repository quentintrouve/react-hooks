import React, { useReducer } from 'react'

const initialState = 0;

function reducer(state, action) {
  switch (action) {
    case 'INCR':
      return state + 1;
    case 'DECR':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default function Compteur() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch('INCR')}>Increment</button>
      <button onClick={() => dispatch('DECR')}>Decrement</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}
