import React from 'react'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
const Login = ({setUser}) => {
  const [formValues, setFormValues] = useState({email: '', password: ''})
  let navigate = useNavigate()
  const handleChange = (e) => {
  setFormValues({...formValues, [e.target.name]: e.target.value})    
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({
      email: '',
      password: ''
    })
    setUser(payload)
    navigate('/')
  }
  
  return (
    <div className='bg-login'>
    <div className='h-screen bg-slate-700 cover'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Email' onChange={handleChange} name='email' value={formValues.email} required/>
      <input type='password' placeholder='Password' onChange={handleChange} name='password' value={formValues.password} required/>
      <button className='login-btn'>Login</button>
      </form>
      
      <Link to='/register'>
      <button className='sign-up-btn' >Register Here</button>
      </Link>

      
    </div>
    </div>
  )
}

export default Login
