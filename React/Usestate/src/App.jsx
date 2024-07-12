import React, { useState } from 'react'

const App = () => {
  const [data , setData] =useState(0)
  const incre=() =>
  {
    // setData(data + 1)
    setData( (la)=>{
      return la + 1// also an same 
    })
    // console.log(data);
    
   
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={incre}>count</button>
    </div>
  )
}

export default App