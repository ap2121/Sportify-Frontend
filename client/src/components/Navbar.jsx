import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, handleLogOut }) => {
  const [showLeagues, setShowLeagues] = useState(false);
  const leagues = [
    { id: 1, name: 'Premier League' },
    { id: 2, name: 'NBA' },
    { id: 3, name: 'NHL' },
    { id: 4, name: 'NFL' },
  ];

  const handleMouseEnter = () => {
    setShowLeagues(true);
  };

  const handleMouseLeave = () => {
    setShowLeagues(false);
  };

  let userOptions
  if (user) {
    userOptions = (
      <header className='flex justify-between items-center w-full'>
        <div className='text-2xl ml-5 text-white'>
          <NavLink to='/'>Sportify</NavLink>
        </div>

        <ul className='px-5 flex items-center'>
          <li className='font-medium text-xl mr-6 text-slate-100'>Welcome {user.email}</li>
          <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
            <NavLink onClick={handleLogOut} to='/'>Sign Out</NavLink>

          </li>

          <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li
            className='relative px-4 py-2 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Leagues
            {showLeagues && (
              <ul className='absolute z-10 bg-gray-800 p-2 rounded-md shadow-xl'>
                {leagues.map((league) => (
                  <li key={league.id} className='py-2'>
                    <NavLink
                      to={`/leaguePage/${league.id}`}
                      className='text-white hover:text-gray-400'
                    >
                      {league.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </header>
    )
  }

  let publicOptions = (
    <header className='flex justify-between items-center text-white w-full'>
      <div className='text-2xl ml-5 text-white'>
        <NavLink to='/'>Sportify</NavLink>
      </div>
      <ul className='px-5 items-center'>
        <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
          <NavLink to='/login'>Sign In</NavLink>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li
          className='relative px-4 py-2 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Leagues
          {showLeagues && (
            <ul className='absolute z-10 bg-gray-800 p-2 rounded-md shadow-xl'>
              {leagues.map((league) => (
                <li key={league.id} className='py-2'>
                  <NavLink
                    to={`/leaguePage/${league.id}`}
                    className='text-white hover:text-gray-400'
                  >
                    {league.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </header>
  )




  
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-slate-700'>
      {user ? userOptions : publicOptions}
      
      {/* <div className='text-2xl ml-5 text-white'>
        <NavLink to='/'>Sportify</NavLink>
      </div>
      <ul className='px-5 flex items-center'>
        <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li
          className='relative px-4 py-2 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Leagues
          {showLeagues && (
            <ul className='absolute z-10 bg-gray-800 p-2 rounded-md shadow-xl'>
              {leagues.map((league) => (
                <li key={league.id} className='py-2'>
                  <NavLink
                    to={`/leaguePage/${league.id}`}
                    className='text-white hover:text-gray-400'
                  >
                    {league.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul> */}
    </div>
  );
};

export default Navbar;