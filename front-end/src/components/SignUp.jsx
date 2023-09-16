import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
    var[name,setName]=useState("")
    var[email,setEmail]=useState("")
    var[password,setPassword]=useState("")

    var navigate=useNavigate()

    useEffect(()=>{
      var auth=localStorage.getItem('users')
       {auth ? navigate('/') : navigate('/signup')}

    },[])


    var getData=(e)=>{
       e.preventDefault();
      axios.post('http://localhost:5000/register',{name,email,password})
      .then((resp)=>{
          console.log(resp.data)
          localStorage.setItem("users",JSON.stringify(resp.data))
          localStorage.setItem("token",JSON.stringify(resp.data.Sakib))
           if(resp.data)
           {
               navigate('/')
           }
      })
    }

  return (
    <div className='mainf'>
        <h1 className='r'>Register</h1>
       <Form className='form'>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}placeholder="Password" />
      </Form.Group>
       <Button variant="danger"onClick={getData}>SignUp</Button>
    </Form>
    </div>
  )
}

export default SignUp
