import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const LeaguePage = () => {

    const [selectedLeague, setSelectedLeague] = useState()
    
    useEffect(() => {
    const getSportbyId = async () => {
        const response = await axios.get(`http://localhost:3001/api/sports/all-sports/`)
        setSelectedLeague(response)
    }
    getSportbyId()
}, [])
  return (
    <div className='h-screen bg-slate-700'>
        Team
    </div>
  )
}

export default LeaguePage
