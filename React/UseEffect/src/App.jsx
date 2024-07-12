import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const[data,setData] = useState(100)
  useEffect(() =>{},[])
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default App