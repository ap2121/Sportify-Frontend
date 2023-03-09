import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
const YourPosts = ({ }) => {
    const [posts, setPosts] = useState(null)
    const { id } = useParams()
    const getUserPosts = async () => {

        const userPosts = await axios.get(`http://localhost:3001/api/posts/posts-by-user/${id}`)
        setPosts(userPosts.data)
    }

    useEffect(() => {
        getUserPosts()

    }, [id])

    return posts && (
        <div className="h-screen bg-slate-100">
            <div className="">
                <div className="top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-white">Your Posts</h1>
                </div>
            </div>
            <div className="max-w-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {posts.map((post) => (
                    <div key={post.id} className="block bg-white shadow-md my-5 rounded-lg hover:shadow-lg transition-shadow">
                        <NavLink to={`/postDetails/${post.id}`} className="p-4">
                            <p className='italic'>Posted in {post.Sport.leagueName}</p>
                            <h2 className="text-lg font-bold flex justify-start">@{post.User.username}</h2>
                            
                            <p className="text-gray-700 mt-2 flex justify-start my-2">{post.content}</p>
                            
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default YourPosts