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
  }, [])

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

  return postDetails && (
    <div className='min-h-screen bg-slate-100'>
  {parseInt(user?.id) === parseInt(postDetails?.User?.id) ?
    <div className='border-2 rounded-lg p-10 max-w-xl mx-auto bg-white mt-84'>
      <div className='flex flex-col justify-start font-bold'>
        <p className='text-3xl flex justify-start'>@
          {postDetails.User.username}
        </p>
        <p className='flex justify-start text-slate-400 mt-3'>{postDetails.createdAt.split('T')[0]}
        </p>
      </div>
      <h3 className=' flex justify-start text-xl my-3'>{postDetails.content}
      </h3>
      <img src={postDetails.image} alt={postDetails.image} />

      <div className='max-w-xl mx-auto flex justify-around mt-4'>
        <button onClick={() => handleDeletePost(postDetails.id, postDetails.Sport.id)}>Delete Post</button>
        <button onClick={toggleEdit}>Edit Post</button>
      </div>
      {
        edit && <EditPost editData={editData} handlePostChange={handlePostChange} handlePostEdit={handlePostEdit} />
      }
    </div> :
    <div className='border-2 rounded-lg p-10 max-w-xl mx-auto p mt-20'>
      <div className='flex flex-row justify-start font-bold'>
        <p className='text-white text-3xl'>{postDetails.User.username}</p>
      </div>
      <h3 className=' flex justify-start text-white text-xl my-3'>{postDetails.content}</h3>
      <div>
        <img src={postDetails.image} alt={postDetails.image} />
        <p className='flex justify-start text-slate-400 mt-3'>{postDetails.createdAt.split('T')[0]}</p>
      </div>
    </div>
  }
</div>

  )
}
export default PostDetails

