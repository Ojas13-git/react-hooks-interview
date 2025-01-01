//Use Case2: Accessing the DOM Elements 
"use client"
import React, { useRef } from 'react'

const RefHook2 = () => {
    const inputEle = useRef("")
    const handleClick = () => {
        console.log(inputEle.current);
        inputEle.current.style.width="300px";
        inputEle.current.focus();
    }

  return (
    <div>
        <input type="text" ref={inputEle}/>
        <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default RefHook2