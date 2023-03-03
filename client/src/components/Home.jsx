import React from 'react'

const Home = () => {
    return (
        <div className='bg-slate-700 sm:h-screen'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row'>
                <div className='max-w-sm flex-col space-y-20 border-y-2'>
                    <div className='my-5'>
                        <h1 className='text-white text-4xl mb-5'>
                            Welcome to Sportify
                        </h1>
                        <p className='text-white'>
                            Your go to app for sports leagues around the country and world.  Join communities of other rabid supporters and join the discussion in your favorite league.  From the Nba to the Premiere League, find your crowd and get in on the action.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
