import React from 'react'

const About = () => {
  return (
    <div className='h-screen bg-slate-700'>
      <div className='flex flex-col text-left mx-20'>
        <h2 className='text-white text-5xl mt-10'>What we built</h2>
        <p className='text-white mt-6 text-xl'>Sportify is an app built with the idea of sports and the communities they help bring together.  Being a part of something bigger than yourself is a powerful feeling that comes along with a sense of belonging. Choose your favorite sports leagues from around the world, see what other rabid fans have to say, or post your own hot take. From the NBA to the Premiere League, find YOUR crowd and get in on the discussion.</p>
      </div>

      <h2 className='text-white text-5xl mt-10 mx-20 text-left'>Who we are</h2>
      <div className='grid grid-cols-3 gap-5 mt-20 mx-8 px-12'>
        <div className='text-white border-2 p-5 rounded-3xl '>
          <h3 className='text-3xl'>Nickon Babaei</h3>
          <img src='https://ca.slack-edge.com/T0351JZQ0-U04CMNSARM3-237670a99690-512' alt='a man who is an engineer' className='h-52 mx-auto rounded-full my-5' />

          <p><a href='https://www.linkedin.com/in/nickon-babaei/' target='_blank'>LinkedIn</a> <p></p> <a href='https://github.com/nickonbabaei' target='_blank'>Github</a></p>
        </div>
        <div className='text-white border-2 p-5 rounded-3xl'>
          <h2 className='text-3xl'>Jakub Soroka</h2>
          <img src='https://media.licdn.com/dms/image/C4E03AQHu29-8g8XGRA/profile-displayphoto-shrink_200_200/0/1652289842087?e=1683763200&v=beta&t=hy1_E8kp6qZXA1wf0ihwDac4Pj5uU3cVrpmP2kkG9E0' className='h-52 rounded-full mx-auto my-5' alt='an engineer in a bowtie' />
          <p><a href='https://www.linkedin.com/in/jakubsoroka/' target='_blank'>LinkedIn</a> <p></p> <a href='https://github.com/S-oroka' target='_blank'>Github</a></p>
        </div>
        <div className='text-white border-2 p-5 rounded-3xl'>
          <h2 className='text-3xl'>Arthur Pate</h2>
          <img src='https://media.licdn.com/dms/image/D5603AQGceHEt6MVm0Q/profile-displayphoto-shrink_200_200/0/1674675372413?e=1683763200&v=beta&t=fF9wN-PRHf_XFSebZOT_P1vDkLmd7QUPy-SO_Qql3Y0' alt='an engineer sitting at a table' className='h-52 rounded-full mx-auto my-5' />

          <p><a href='https://www.linkedin.com/in/arthurpate21/' target='_blank'>LinkedIn</a> <p></p> <a href='https://github.com/ap2121' target='_blank'>Github</a></p>
        </div>

      </div>
    </div>
  )
}

export default About
