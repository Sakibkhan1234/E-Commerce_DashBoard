import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    var [email,setEmail]=useState("")
    var [password,setPassword]=useState("")
    var navigate=useNavigate()

    var emailsubmit=(e)=>{
      setEmail(e.target.value)
  }
  var passwordsubmit=(e)=>{
    setPassword(e.target.value)
  }


    useEffect(()=>{
        var auth =localStorage.getItem('users')
         {auth ? navigate("/") : navigate("/login")}
    },[])
    var getData=()=>{
    axios.post('http://localhost:5000/login',{email,password})
    .then((resp)=>{
        console.log(resp.data)
        localStorage.setItem("users",JSON.stringify(resp.data))
        localStorage.setItem("token",JSON.stringify(resp.data.Sakib))
         if(resp.data)
         {
          navigate("/")
         }else{
          alert("hsdchjds")
         }
    })
      }
  return (
    <div>
        <div className='mainf'>
        <h1 className='r'>Login</h1>
       <Form className='form'>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"placeholder="Enter email" value={email} onChange={emailsubmit} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={passwordsubmit} />
      </Form.Group>
      <Button variant="success" onClick={getData}>Login</Button>
        </Form>
        </div>
    </div>
  )
}

export default Login
