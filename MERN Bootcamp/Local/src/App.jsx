import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(parseInt(localStorage.getItem("count"))|| 0);
    useEffect(() => {
        localStorage.setItem("count",count.toString());
        
    },[count])
  return (
    <div>
      
    </div>
  )
}

export default Counter