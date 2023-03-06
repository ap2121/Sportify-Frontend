import React from 'react'
import { RegisterUser } from '../services/Auth'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
        email: formValues.email,
        username: formValues.username,
        password: formValues.password
    })
    setFormValues({
        email: '',
        username: '',
        password: ''
    })
    navigate('/login')
  }
  
    return (
    

<div className='bg-login'>
    <div className='h-screen bg-slate-700 cover'>
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Email' onChange={handleChange} name='email' value={formValues.email} required/>
      <input type='text' placeholder='Username' onChange={handleChange} name='username' value={formValues.username} required/>
      <input type='password' placeholder='Password' onChange={handleChange} name='password' value={formValues.password} required/>
      <input type='password' placeholder='Confirm Password' onChange={handleChange} name='confirmPassword' value={formValues.confirmPassword} required/> 
      <div className='login-btn' onClick={handleSubmit}>Register</div>
      </form>
      
      
      
      

      
    </div>
    </div>
    
  )
}

export default Register