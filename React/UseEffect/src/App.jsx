import React, { useEffect, useState } from 'react'

const App = () => {
  const[data,setData]=useState(9090);
  const[naa,setNaa]=useState(200)

  useEffect(() => {
    setData(200)
    console.log("first")

    return(()=>{setData(100)//it is used to clean the memory and avoids performance issues
      console.log("cleaned")
    })
  },[data,naa])
  console.log(data)

  return (
    <div>

      <h2>
        {data}
      </h2>
      <button onClick={() => setData((prevData) => prevData + 1)}>
        </button>
        <p>{naa}</p>
        <button onClick={()=>setNaa((date)=>date+1)}></button>

    </div>
  )
}

export default App