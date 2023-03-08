import React from 'react'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { Link, useNavigate } from 'react-router-dom'
const Login = ({ setUser }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  let navigate = useNavigate()
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
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
    <div className='h-screen bg-slate-700'>
      <div className='flex flex-col'>
        <h1 className='text-white text-3xl my-20'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mx-auto'>
          <input type='email' placeholder='Email' onChange={handleChange} name='email' value={formValues.email} className='my-4 bg-transparent border-b-2 text-white' required />
          <input type='password' placeholder='Password' onChange={handleChange} name='password' value={formValues.password} className='my-4 bg-transparent border-b-2 text-white' required />
          
          <div className='flex flex-col my-20'>
            <button className='mb-5 bg-white'>Login</button>
            <Link to='/register'>
              <p>Dont have an account?</p><button className=''>Sign up here</button>
            </Link>
          </div>
        </form>


      </div>
    </div>
  )
}

export default Login
