import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='h-screen bg-slate-700'>
      <div className='flex flex-col text-left ml-5'>
        <h2 className='text-white text-5xl mt-10'>What we built</h2>
        <p>Sportify is an app built with the idea of sports and the communities they help bring together.  Being a part of something bigger than yourself is a powerful feeling that comes along with a sense of belonging. Choose your favorite sports leagues from around the world, see what other rabid fans have to say, or post your own hot take. From the NBA to the Premiere League, find YOUR crowd and get in on the discussion.</p>
      </div>

      <h2 className='who-title'>Who built it</h2>
      <div className='about-us-cnt'>
        <div className='about-us-items'>
          <h3>Nickon</h3>
          <img src='https://media.licdn.com/dms/image/D4E35AQE5rlXzU6gxcw/profile-framedphoto-shrink_800_800/0/1677799679806?e=1678809600&v=beta&t=K2SYmNjxsbXNovasEnV8KQa6delB93fyEYCB7I4oCFo' alt='a man who is an engineer' className='about-img' />
          <p>About Nickon</p>
          <p><a href='https://www.linkedin.com/in/nickon-babaei/' target='_blank'>LinkedIn</a> <a href='https://github.com/nickonbabaei' target='_blank'>Github</a></p>
        </div>
        <div className='about-us-items'>
          <h2>Jakub</h2>
          <img src='https://media.licdn.com/dms/image/C4E03AQHu29-8g8XGRA/profile-displayphoto-shrink_200_200/0/1652289842087?e=1683763200&v=beta&t=hy1_E8kp6qZXA1wf0ihwDac4Pj5uU3cVrpmP2kkG9E0' className='about-img' alt='an engineer in a bowtie' />
          <p>About Jakub</p>
          <p><a href='https://www.linkedin.com/in/jakubsoroka/' target='_blank'>LinkedIn</a> <a href='https://github.com/S-oroka' target='_blank'>Github</a></p>
        </div>
        <div className='about-us-items'>
          <h2>Arthur</h2>
          <img src='https://media.licdn.com/dms/image/D5603AQGceHEt6MVm0Q/profile-displayphoto-shrink_200_200/0/1674675372413?e=1683763200&v=beta&t=fF9wN-PRHf_XFSebZOT_P1vDkLmd7QUPy-SO_Qql3Y0' alt='an engineer sitting at a table' className='about-img' />
          <p>About Arthur</p>
          <p><a href='https://www.linkedin.com/in/arthurpate21/' target='_blank'>LinkedIn</a> <a href='https://github.com/ap2121' target='_blank'>Github</a></p>
        </div>

      </div>
    </div>
  )
}

export default About
