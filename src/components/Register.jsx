import React from 'react'
import { RegisterUser } from '../services/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginPhoto from '../assets/LoginPhoto.jpg';

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      email: formValues.email,
      username: formValues.username,
      password: formValues.password
    })
   
    if(formValues.email && formValues.username && formValues.password) {
      setFormValues({
        email: '',
        username: '',
        password: ''
      })
      navigate('/')
    } else {
      return
    }
    
    
  }

  return (
    <div className='bg-login'>
      <div className="h-screen bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${LoginPhoto})` }}>
        <div className='flex flex-col max-w-md justify-center mx-auto w-full bg-slate-800 bg-opacity-80'>
          <h1 className='text-white text-3xl mt-20'>Sign Up</h1>
          <form className='flex flex-col mx-auto' onSubmit={handleSubmit}>
            <input type='email' placeholder='Email' onChange={handleChange} name='email' value={formValues.email} className='my-4 bg-transparent border-b-2 text-white outline-none' required />
            <input type='text' placeholder='Username' onChange={handleChange} name='username' value={formValues.username} className='my-4 bg-transparent border-b-2 text-white outline-none' required />
            <input type='password' placeholder='Password' onChange={handleChange} name='password' value={formValues.password} className='my-4 bg-transparent border-b-2 text-white outline-none' required />
            <input type='password' placeholder='Confirm Password' onChange={handleChange} name='confirmPassword' value={formValues.confirmPassword} className='my-4 bg-transparent border-b-2 text-white outline-none' required />
            <div className="mb-5 text-black bg-white hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out cursor-pointer my-20" onClick={handleSubmit}>Register</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register