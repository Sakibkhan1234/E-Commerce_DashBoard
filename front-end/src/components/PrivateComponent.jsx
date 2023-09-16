import React from 'react'
import { Navigate, Outlet  } from 'react-router-dom'

const PrivateComponent = () => {
var auth=localStorage.getItem('users')
  return (
    <div>
      {auth ? <Outlet/>:<Navigate to='/signup'/>}
    </div>
  )
}

export default PrivateComponent
