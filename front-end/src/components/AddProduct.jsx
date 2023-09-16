import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    var [name,setName]=useState("")
    var [price,setPrice]=useState("")
    var [category,setCategory]=useState("")
    var [company,setCompany]=useState("")
    var[error,setError]=useState(false)

    var navigate=useNavigate()

            var filehandle=()=>{

              if(!name||!price||!category||!company)
              { 
                setError(true)
                return false
              }
              var userId=JSON.parse(localStorage.getItem('users'))._id
              console.log(userId)
              var data={name,price,category,company,userId}
             axios.post('http://localhost:5000/addproduct',data)
             .then((resp)=>{
                console.log(resp.data)

                navigate("/")
             })
         
          }
    
  return (
       <div className='mainf1'>
           <h1 className='k'>Add Product</h1>
          <Form className='form'>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="email" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name" />
          {error && !name && <span className='err'>Please Enter Your ProductName</span>}
      </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="email" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter name" />
        {error && !price && <span className='err'>Please Enter Your Price</span>}
      </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="email" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter name" />
        {error && !category && <span className='err'>Please Enter Your Category</span>}
      </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Company</Form.Label>
        <Form.Control type="email" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter name" />
        {error && !company && <span className='err'>Please Enter CompanyName</span>}
      </Form.Group>
      <Button variant="warning" onClick={filehandle}>Add Product</Button>
         </Form> 
    </div>
  )
}

export default AddProduct
