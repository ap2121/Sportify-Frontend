import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
  return (
    <div className='bg-login'>
    <div className='h-screen bg-slate-700 cover'>
      <h1>Login</h1>
      <input type='text' placeholder='Username'/>
      <input type='text' placeholder='Password'/>

      <div className='login-btn'>Login</div>
      <Link to='/register'>
      <div className='sign-up-btn'>Register Here</div>
      </Link>

      
    </div>
    </div>
  )
}

export default Login
