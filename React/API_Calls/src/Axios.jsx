// import axios from 'axios'
import React, { useEffect } from 'react'
import axios from '../axios.js'
const Axios = () => {
    async function apicalls()
    {
        const res = await axios.get("/todos/1")
        console.log(res.data)
    }
    useEffect(()=>{apicalls()},[])
  return (
    <div>
        <h1>This is axios</h1>
        <button onClick={apicalls}>axios</button>
    </div>
  )
}

export default Axios