import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import coverPhoto from '../assets/CoverPhoto.jpg';
import Client from '../services/api';


const Home = () => {

  const [sports, setSports] = useState()

  const getSports = async () => {
    const response = await Client.get(`/api/sports/all-sports`)
    setSports(response.data)
  }

  useEffect(() => {
    getSports()
  }, [])

  return sports && (
    <div>
      <div className="relative sm:h-screen bg-cover" style={{ backgroundImage: `url(${coverPhoto})` }}>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row'>
          <div className='max-w-sm flex-col border-y-2 bg-slate-100 bg-opacity-20'>
            <div className='my-5'>
              <h1 className='text-white text-6xl mb-5'>
                Welcome to Sportify
              </h1>
              <p className='text-white'>
                Your go-to app for sports leagues around the country and world. Join communities of other rabid supporters and join the discussion in your favorite league. From the NBA to the Premier League, find your crowd and get in on the action.
              </p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="sports-section" className='bg-gray-100 py-12'>
        <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-3xl font-extrabold text-gray-900 mb-4'>
            Join the Conversation
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {sports.map((sport, index) => (
              <NavLink key={sport.id} to={`/leaguePage/${sport.id}`} className='block overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg'>
                <img src={sport.image} alt={sport.image} className='w-full h-48 object-cover' />
                <div className='bg-white p-4'>
                  <h3 className='text-2xl font-medium text-gray-900 mb-2'>
                    {sport.leagueName}
                  </h3>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

}

export default Home;
