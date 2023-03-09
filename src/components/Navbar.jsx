import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, handleLogOut }) => {
  const [showLeagues, setShowLeagues] = useState(false);
  const leagues = [
    { id: 1, name: 'NBA' },
    { id: 2, name: 'NFL' },
    { id: 3, name: 'NHL' },
    { id: 4, name: 'MLB' },
    { id: 5, name: 'MLS' },
    { id: 6, name: 'Premier League' },
    { id: 7, name: 'Champions League' },
    { id: 8, name: 'Bundesliga' },
    { id: 9, name: 'LaLiga' },
    { id: 10, name: 'Ligue 1' },
    { id: 11, name: 'Serie A' },
    { id: 12, name: 'UFC' },
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
      <header className='flex justify-between items-center w-full z-10'>
        <div className='text-2xl ml-5 text-white flex flex-col'>
          <NavLink to='/'>Sportify</NavLink>
        </div>
        <div className='flex flex-col justify-end'>
          <p className='font-medium text-sm mr-6 text-slate-100 ml-40'>Signed in with: {user?.email}
          </p>
          <ul className='px-5 flex items-center flex-row'>

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
                <ul className='absolute z-20 bg-gray-800 p-2 rounded-md shadow-xl'>
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
            <li className='relative px-4 py-2 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-150'>
              <NavLink to={`/yourPosts/${user.id}`}>
                Your Posts
              </NavLink>
            </li>
          </ul>
        </div>

      </header>
    )
  }

  let publicOptions = (
    <header className='flex justify-between items-center text-white w-full z-10'>
      <div className='text-2xl ml-5 text-white'>
        <NavLink to='/'>Sportify</NavLink>
      </div>
      <ul className='px-5 items-center flex flex-row'>
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
            <ul className='absolute z-20 bg-gray-800 p-2 rounded-md shadow-xl'>
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