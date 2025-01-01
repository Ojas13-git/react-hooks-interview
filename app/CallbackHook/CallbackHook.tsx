"use client"
import React, { useCallback, useMemo, useState } from 'react'
import PrintTable from './PrintTable';

const MemoHook = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const cssStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark? "white" : "black"
    }

    const calculateTable = useCallback(()=> {
        return [number*1, number*2, number*3, number*4, number*5]
    },[number])


  return (
    <div style={cssStyle}>
        <input type="number"
            onChange={(e)=> setNumber(e.target.valueAsNumber)}
            value={number} 
        />
       <PrintTable calculateTable={ calculateTable}/>
        <button onClick={() => setDark(!dark)}>Toggle </button>
    </div>
  )
}



export default MemoHook