//Use Case1: Creating a mutable var using ref which will not re render the component
"use client"
import React, { useEffect, useRef, useState } from 'react'

const RefHook = () => {
    const [name, setName] = useState("")
    const count = useRef(0);  //returns a object with current property 
    
    useEffect(()=>{
        count.current++;
    })
  return (
    <div>
        <input type="text" onChange={(e)=> setName(e.target.value)}/>
        <h2>Name: {name}</h2>
        <h2>Renders: {count.current}</h2>
    </div>
  )
}

export default RefHook