import React from 'react';
import coverPhoto from '../assets/CoverPhoto.jpg';

const Home = () => {
  return (
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
      </div>
    </div>
  )
}

export default Home;
