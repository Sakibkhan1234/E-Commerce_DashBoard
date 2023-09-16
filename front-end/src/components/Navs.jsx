import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navs = () => {
  var auth=localStorage.getItem('users')

  var navigate=useNavigate()

  var returnsignup=()=>{
       localStorage.clear()
       navigate('/signup')
  }

  return (
    <div className='p'>
      { auth ?
       <ul className='nav-ul'>
        <img className='im'src="https://besthqwallpapers.com/Uploads/27-7-2021/172086/thumb-sakib-4k-wallpapers-with-names-sakib-name-blue-neon-lights.jpg"
         alt="logo" />
        <li><Link to="/" className='l'>Product</Link></li>
        <li><Link to="/Add"className='l'>Add Product</Link></li>
        <li><Link to="/Update"className='l'>Update Product</Link></li>
        <li><Link to="/login" onClick={returnsignup} className='l'>Logout</Link></li>      
       </ul>
        :                             
       <ul className='nav-ul'>
        <img className='im'src="https://besthqwallpapers.com/Uploads/27-7-2021/172086/thumb-sakib-4k-wallpapers-with-names-sakib-name-blue-neon-lights.jpg"
         alt="logo" />
        <li><Link to="/login" className='s'>Login</Link></li>
        <li><Link to="/signup"className='a'>SignUp</Link></li>
       </ul>
     }
    </div>
  )
}

export default Navs
