import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import EditPost from './EditPost'

const PostDetails = ({ user }) => {

  let navigate = useNavigate()

  const [postDetails, setPostDetails] = useState(null)
  const [edit, setEdit] = useState(false)
  const [editData, setEditData] = useState()

  let { id } = useParams()

  const handleDeletePost = async (postID, sportID) => {
    const id = sportID
    await axios.delete(`http://localhost:3001/api/posts/delete-post/${postID}`)
    navigate(`/leaguePage/${id}`)
  }

  const getPostDetails = async () => {
    const response = await axios.get(`http://localhost:3001/api/posts/get-post/${id}`)
    setPostDetails(response.data)
    setEditData(response.data)
  }

  useEffect(() => {
    getPostDetails()
  },[])

  const handlePostChange = (evt) => {
    setEditData({ ...editData, [evt.target.id]: evt.target.value })
  }

  const handlePostEdit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/posts/edit-post/${id}`, editData)
    setEdit(false)
    getPostDetails()
  }

  const toggleEdit = () => {
    setEdit(!edit)
  }

  console.log(user)
  console.log(postDetails)

  // let userOptions = (
  //   <div>
  //     <div>
  //       <p>{postDetails.User.username}</p>
  //       <h3>{postDetails.content}</h3>
  //     </div>
  //     <div>
  //       <img src={postDetails.image} alt={postDetails.image} />
  //       <p>{postDetails.createdAt.split('T')[0]} <button onClick={() => handleDeletePost(postDetails.id, postDetails.Sport.id)}>Delete Post</button></p>
  //     </div>
  //     <button onClick={toggleEdit}>Edit Post</button>
  //     {
  //       edit && <EditPost editData={editData} handlePostChange={handlePostChange} handlePostEdit={handlePostEdit} />
  //     }
  //   </div>
  //  )
  // let publicOptions = (
  //   <div>
  //     <div>
  //       <p>{postDetails.User.username}</p>
  //       <h3>{postDetails.content}</h3>
  //     </div>
  //     <div>
  //       <img src={postDetails.image} alt={postDetails.image} />
  //       <p>{postDetails.createdAt.split('T')[0]}</p>
  //     </div>
  //   </div>
  // )

  return postDetails && (
    <div>
      {/* { user.id === postDetails.User.id ? userOptions : publicOptions} */}

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
        {
          edit && <EditPost editData={editData} handlePostChange={handlePostChange} handlePostEdit={handlePostEdit} />
        }
      </div>
    </div>

  )
}
export default PostDetails

