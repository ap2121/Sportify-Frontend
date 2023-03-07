import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PostDetails = () => {

  let navigate = useNavigate()

  const [postDetails, setPostDetails] = useState(null)

  let {id} = useParams()

  const handleDeletePost = async (postID, sportID) => {
    const id = sportID
    await axios.delete(`http://localhost:3001/api/posts/delete-post/${postID}`)
    navigate(`/leaguePage/${id}`)

  }

  const getPostDetails = async () => {
    const response = await axios.get(`http://localhost:3001/api/posts/get-post/${id}`)
    setPostDetails(response.data)
  }

  useEffect(() => {
    getPostDetails()
  }, [id])


  return postDetails && (

    <div>
      <div>
        <p>{postDetails.User.username}</p>
        <h3>{postDetails.content}</h3>
      </div>
      <div>
        <img src={postDetails.image} alt={postDetails.image} /> 
        <p>{postDetails.createdAt.split('T')[0]} <button onClick={() => handleDeletePost(postDetails.id, postDetails.Sport.id)}>Delete Post</button></p>
      </div>
    </div>
  )
}

export default PostDetails
