import React from 'react'
import User from './User'
const App = () => {
  const userdata ={
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  }
  return (
    <div>
      <h1>App</h1>
      <User {...userdata} />
    </div>
    
  )
}

export default App