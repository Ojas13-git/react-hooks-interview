import React, { useEffect, useState } from 'react'

const PrintTable = ({calculateTable}) => {
    const [rows, setRows] = useState([])

    useEffect(()=> {
        console.log("Print Table RUns");
        setRows(calculateTable());
        
    },[calculateTable])

  return rows.map((row: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined,index: React.Key | null | undefined)=> {
    return<p key={index}>{row}</p>
  })
    

}

export default PrintTable