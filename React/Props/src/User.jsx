import React from 'react'

const User = ({name,email}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{email}</p>

    </div>
  )
}

export default User


/*
destructuring 
const data ={usename: 'John', email: 'john@example.com' , password: 'password',Phone: '123'}

let {name, email, password} = data;

console.log(name, email, password)


*/