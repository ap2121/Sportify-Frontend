import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 bg-slate-700'>
            <div className='text-2xl ml-5 text-white'>
                <NavLink to='/'>Sportify</NavLink>
            </div>
            <ul className='px-5 flex'>
                <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
