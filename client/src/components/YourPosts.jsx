import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
const YourPosts = () => {
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
        <div>
            <div>
                <h1> Your Posts </h1>
            </div>
            {posts.map((post) => (
                <div key={post.id}>
                    <NavLink to={`/postDetails/${post.id}`}>

                        {post.content}
                        {post.User.username}
                        {post.Sport.leagueName}
                    </NavLink>
                </div>
            ))}

        </div>
    )
}

export default YourPosts