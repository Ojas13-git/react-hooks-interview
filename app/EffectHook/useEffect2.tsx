"use client"
import React, { useEffect, useState } from 'react'

const useEffect2 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Run useEffect', count);
        return(
            console.log("Clean Up :", count)
        )
    }, [count])
  return (
    <div>
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

export default useEffect2