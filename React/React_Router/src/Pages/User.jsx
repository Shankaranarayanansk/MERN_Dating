import React from 'react'
import {useParams} from "react-router-dom"

const User = () => {
  const {username}=useParams();
  return (
    <div>
      Welcome {username} to the React Router  
    </div>
  )
}

export default User