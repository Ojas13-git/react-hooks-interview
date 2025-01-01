"use client"
import React, { useState, useReducer } from 'react'

const ACTION = {
    INCREASE: "increase",
    DECREASE: "decrease"
}
const initialState = {count:0}

const reducer = (state: { count: number }, action: any) => {
    switch(action.type){
        case ACTION.INCREASE:
            return {count: state.count + 1}

        case ACTION.DECREASE:
            return {count: state.count - 1}

        default: 
            return state;
    }
                
            
}
const ReducerHook = () => {
    // const [count, setCount] = useState(0)
    
    const [state, dispatch] = useReducer(reducer,initialState)

    const increaseCount =() => {
        dispatch({type: ACTION.INCREASE})
    }

    const decreaseCount =() => {
        // setCount((prev) => prev-1)
        dispatch({type: ACTION.DECREASE})
    }

  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default ReducerHook