import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full h-20 px-4'>
            <div className='text-2xl ml-5'>
                <NavLink to='/'>Sportify</NavLink>
            </div>
            <ul className='px-5 flex'>
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150'>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150'>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
