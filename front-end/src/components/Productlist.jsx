import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
const Productlist = () => {
    var[product,setProduct]=useState([])

    useEffect(()=>{
        getdata();
    },[])

     var getdata=()=>{
        axios.get('http://localhost:5000/product')
      //   ,{
      //    headers :{
      //       authorization: JSON.parse(localStorage.getItem('token'))
      //    }
      //   })
        .then((resp)=>{
           console.log(resp.data)
           setProduct(resp.data)
        })
     }

     var deletedata=(id)=>{
        axios.delete(`http://localhost:5000/delete/${id}`)
        .then((resp)=>{
             console.log(resp)
        })
     }
      var searchdata=(e)=>{
         var key=e.target.value
         if(key){
         axios.get(`http://localhost:5000/search/${key}`)
         .then((resp)=>{
            setProduct(resp.data)
         })
      }else{
           getdata();
      }
      }
  return (
    <div className='get'>
      <h3>Product List</h3>
      <Form.Group className='S'>
      <Form.Control type="text" onChange={searchdata}  placeholder="Search" />
      </Form.Group>
      <div className='W'>
      <ul>
        <li>Sr.no</li>
        <li>name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
        {
           product.length>0 ? product.map((item,index)=>
                <ul key={item._id}>
                   <li>{index+1}</li> 
                   <li>{item.name}</li>
                   <li>₹{item.price}</li>
                   <li>{item.category}</li>
                   <li><button className='d' onClick={()=>{deletedata(item._id)}}>Delete</button>
                   <Link to={'/Update/'+item._id}>Update</Link></li>
                </ul>
                 
            )
            :
            <h1>No Result Found</h1>
        }
        </div>
    </div>
  )
}

export default Productlist
