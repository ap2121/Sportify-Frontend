import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LeaguePage = ({user}) => {

    const initialPostState = {
        content: '',
        image: ''
    }

    const [selectedLeague, setSelectedLeague] = useState()
    const [posts, setPosts] = useState()
    const [createPost, setCreatePost] = useState(initialPostState)

    let { id } = useParams()

    const handlePostChange = (evt) => {
        setPostState({ ...recipeState, [evt.target.id]: evt.target.value })
    }

    const handlePostSubmit = async (e) => {
        e.preventDefault()

    }

    useEffect(() => {
        const getSportbyId = async () => {
            const response = await axios.get(`http://localhost:3001/api/posts/posts-by-sport/${id}`)
            setPosts(response.data)
            setSelectedLeague(response.data[0])
            console.log(posts);
        }
        getSportbyId()
    }, [id])

    return selectedLeague && (
        <div className='h-screen bg-slate-700'>
            <div className='max-w-screen-lg p-7 mx-auto flex flex-col'>
                <div className='flex flex-col'>
                    <img src={selectedLeague.Sport.image} alt={selectedLeague.Sport.image} />
                    <h1 className='text-6xl text-white'>{selectedLeague.Sport.leagueName}</h1>
                    <h2 className='text-2xl text-white'>{selectedLeague.Sport.description}</h2>
                </div>
                <div className='flex flex-col mt-10'>

                    {posts.map((post) => (
                        <Link key={post.id} to={`/postDetails/${post.id}`} className='shadow-md  shadow-gray-600 rounded-lg'>
                            <div className='text-white bg-slate-500 rounded-lg'>
                                <h2 className='text-3xl'>{post.User.username}</h2>

                                <h3>{post.content}</h3>
                                
                            </div>


                        </Link>
                    ))}
                    
                </div>
                {/* Posts by Sport */}
            </div>
        </div>
    )
}

export default LeaguePage
