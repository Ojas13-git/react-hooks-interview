//Watch Video

"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const LayoutEffect = () => {
    const [toggle, setToggle] = useState(false)
    const textRef = useRef("")

    useEffect(()=>{
        if(textRef.current != null) {
            const dimension=textRef.current.getBoundingClientRect();
            console.log(dimension);
            
        }
    },[toggle])



    // useEffect(()=> {
    //     console.log("useEffect")
    // },[toggle])

    // useLayoutEffect(()=> {
    //     console.log("useLayoutEffect")
    // },[toggle])

  return (
    <div>
        <button onClick={()=> setToggle(!toggle)}>Toggle</button>
        {toggle && <h2 ref={textRef}>Code runs</h2>}
    </div>
  )
}

export default LayoutEffect