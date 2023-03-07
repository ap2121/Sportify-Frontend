import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PostDetails = () => {

  let navigate = useNavigate()

  const [postDetails, setPostDetails] = useState(null)
  const [edit, setEdit] = useState(false)
  const [editData, setEditData] = useState({})

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

  useEffect(() => {
    setEditData(postDetails)
  }, [postDetails])
  
const toggleEdit = () => {
  setEdit(!edit)
}

const handleChange = (e) => {
  setEditData((prevEditData) => {
    return {
      ...prevEditData,
      [e.target.name]: e.target.value
    }
  }) 
}


const handleSub = (e) => {
  e.preventDefault()
  axios.put(`http://localhost:3001/api/posts/edit-post/${id}`, editData)
  setEdit(false)
  navigate(`/postDetails/${id}`)
  setPostDetails(editData)
}
  
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
      <button onClick={toggleEdit}>Edit Post</button>
      {edit && <form onSubmit={handleSub}>
        <input type='text' name='content' value={editData.content} onChange={handleChange}/>
        <input type='text' name='image' value={editData.image} onChange={handleChange}/>
        <button>Edit Post</button>
        </form>}
    </div>
  )
}

export default PostDetails
