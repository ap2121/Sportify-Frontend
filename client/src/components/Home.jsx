import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import coverPhoto from '../assets/CoverPhoto.jpg';
import axios from 'axios';

const Home = () => {

  const [sports, setSports] = useState()

  const getSports = async () => {
    const response = await axios.get(`http://localhost:3001/api/sports/all-sports`)
    setSports(response.data)
  }

  useEffect(()=> {
    getSports()
  }, [])

  return sports && (
    <div className="sm:h-screen bg-cover" style={{backgroundImage: `url(${coverPhoto})`}}>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row'>
        <div className='max-w-sm flex-col border-y-2'>
          <div className='my-5'>
            <h1 className='text-white text-6xl mb-5'>
              Welcome to Sportify
            </h1>
            <p className='text-white'>
              Your go to app for sports leagues around the country and world. Join communities of other rabid supporters and join the discussion in your favorite league. From the Nba to the Premiere League, find your crowd and get in on the action.
            </p>
            </div>
          </div>
              <h3>Join the Conversation!</h3>
            <div>
              {sports.map((sport) => (
                <div>
                  <NavLink to={`/leaguePage/${sport.id}`}>
                    <div>
                      <img src={sport.image} alt={sport.image} />
                    </div>
                    <div>
                    {sport.leagueName} 
                    </div>
                  </NavLink>
                </div>

              ))}
              </div>
        </div>
      </div>
  )
}

export default Home;
