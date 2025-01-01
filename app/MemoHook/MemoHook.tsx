"use client"
import React, { useMemo, useState } from 'react'

const MemoHook = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const memoCalculation = useMemo(()=>{   //Difference betn useEffect and MEmo: useEffect we cannot return value and store it in var
        return  expensiveFunction(number)
    },[number])

    // const calculation = expensiveFunction(number);  //Memoize this expensive funtion

    const cssStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark? "white" : "black"
    }

  return (
    <div style={cssStyle}>
        <input type="number"
            onChange={(e)=> setNumber(e.target.valueAsNumber)}
            value={number} 
        />
        {/* In place of calculation we have memoized value */}
        {/* <h2>Calculation: {calculation}</h2> */}
        <h2>Calculation: {memoCalculation}</h2> 
        <button onClick={() => setDark(!dark)}>Toggle </button>
    </div>
  )
}

function expensiveFunction(num: number) {
    console.log("Loop Started");
    for(let i = 0; i<1000000000; i++){
        return num;
    }
    
}

export default MemoHook