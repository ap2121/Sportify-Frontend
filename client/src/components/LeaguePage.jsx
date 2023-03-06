import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const LeaguePage = () => {

    const [selectedLeague, setSelectedLeague] = useState()

    let { id } = useParams()
    
    useEffect(() => {
    const getSportbyId = async () => {
        const response = await axios.get(`http://localhost:3001/api/posts/posts-by-sport/${id}`)
        setSelectedLeague(response)
        console.log(selectedLeague);
    }
    getSportbyId()
}, [id])

  return (
    <div className='h-screen bg-slate-700'>
        <div>
            {/* {selectedLeague.Sport.leagueName} */}
        </div>
        {/* Sport Details */}
        {/* Posts by Sport */}
    </div>
  )
}

export default LeaguePage
