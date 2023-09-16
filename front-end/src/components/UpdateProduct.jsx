import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


var UpdateProduct=()=> {
    var [name,setName]=useState("")
    var [price,setPrice]=useState("")
    var [category,setCategory]=useState("")
    var [company,setCompany]=useState("")
  
    var parms=useParams();
    var navigate=useNavigate();

   useEffect(()=>{
        filehandle()
   },[])

    var filehandle=()=>{
         axios.get(`http://localhost:5000/get/${parms.id}`)
         .then((resp)=>{
           setName(resp.data.name)
           setPrice(resp.data.price)
           setCategory(resp.data.category)
           setCompany(resp.data.company)
         })
    }

    var updatedata=()=>{
      var data={name,price,category,company}
        axios.put(`http://localhost:5000/update/${parms.id}`,data)
        .then((resp)=>{
            console.log(resp.data)
        })
       navigate('/')
    }
  return (
       <div className='mainf1'>
                 <h1 className='k'>Update Product</h1>
          <Form className='form'>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="email" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="email" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter name" />
       
      </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="email" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter name" />
       
      </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Company</Form.Label>
        <Form.Control type="email" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter name" />
      </Form.Group>
      <Button variant="warning" onClick={updatedata}>Update Product</Button>
         </Form> 
    </div>
  )
}

export default UpdateProduct
