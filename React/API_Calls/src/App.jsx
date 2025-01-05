import React from 'react'
import Axios from './Axios';

const App = () => {
   async function Api ()
   {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')   
    const data = await response.json();
    console.log(data)
  }

  return (
    <div>
      
      <h1>joke of day</h1>
      <button onClick={Api}>Call Joke</button>
 
    </div>
  )
}

export default App