//UseEffect without Dependency 
"use client"
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0)
    // useEffect(()=> {
    //     document.title = `${count} new messages!`
    // })// when we use useEffect hook without any dependencies useEffcet will run on every single change in that component(here App)
    
    // useEffect(()=> {
    //     document.title = `${count} new messages!`
    // },[]) //when we use useEffect with empty array it will run only once first time
    
    useEffect(()=> {
        document.title = `${otherCount} new messages!`
    },[otherCount]) //with dependencies it will run only when the value otherCount Changes 
    
    return (
    <div>
        <h3>{count} new Message!</h3>
        <button onClick={()=> setCount(count+1)}>Increase</button>

        <h3>Other Count: {otherCount}</h3>
        <button onClick={()=> setOtherCount(otherCount+5)}>
            Increase by 5
        </button>
    </div>
  )
}

export default UseEffect