import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LeaguePage = () => {

    const [selectedLeague, setSelectedLeague] = useState()
    const [posts, setPosts] = useState()

    let { id } = useParams()



    useEffect(() => {
        const getSportbyId = async () => {
            const response = await axios.get(`http://localhost:3001/api/posts/posts-by-sport/${id}`)
            setPosts(response.data)
            setSelectedLeague(response.data[0])
        }
        getSportbyId()
    }, [id])

    return selectedLeague && (
        <div className='h-screen bg-slate-700'>
            <div className='flex flex-col'>
                <img src={selectedLeague.Sport.image} alt={selectedLeague.Sport.image} />
                <h1 className='text-'>{selectedLeague.Sport.leagueName}</h1>
                <h2>{selectedLeague.Sport.description}</h2>
            </div>
            <div>
                {posts.map((post) => (
                    <Link key={post.id} to={`/postDetails/${id}`}>
                        <div className='text-white my-20'>
                            Hello
                        </div>


                    </Link>
                ))}
            </div>
            {/* Posts by Sport */}

        </div>
    )
}

export default LeaguePage
