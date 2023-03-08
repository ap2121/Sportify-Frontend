import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PostDetails = ({ user }) => {

  let navigate = useNavigate()

  const [postDetails, setPostDetails] = useState(null)
  const [edit, setEdit] = useState(false)
  const [editData, setEditData] = useState({})

  let { id } = useParams()

  const handleDeletePost = async (postID, sportID) => {
    const id = sportID
    await axios.delete(`http://localhost:3001/api/posts/delete-post/${postID}`)
    navigate(`/leaguePage/${id}`)

  }

  const getPostDetails = async () => {
    const response = await axios.get(`http://localhost:3001/api/posts/get-post/${id}`)
    setPostDetails(response.data)
    console.log(response.data)
    console.log(user)
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

    <div className='h-screen bg-slate-700'>
      <div className='border-2 rounded-lg p-10 max-w-xl mx-auto p'>
        <div className='flex flex-row justify-start font-bold'>
          <p className='text-white text-3xl'>
            {postDetails.User.username}
          </p>
        </div>
        <h3 className=' flex justify-start text-white text-xl my-3'>{postDetails.content}
        </h3>
        <img src={postDetails.image} alt={postDetails.image} />
        <p className='flex justify-start text-slate-400 mt-3'>{postDetails.createdAt.split('T')[0]}
        </p>
      </div>
      <div className='text-white max-w-xl mx-auto flex justify-around mt-4'>
        <button onClick={() => handleDeletePost(postDetails.id, postDetails.Sport.id)} className=''>Delete Post</button>
        <button onClick={toggleEdit}>Edit Post</button>
      </div>

      {edit &&
        <form className='flex flex-col items-center' onSubmit={handleSub}>
          <input type='text' name='content' value={editData.content} onChange={handleChange} />

          <input type='text' name='image' value={editData.image} onChange={handleChange} />
          <button className='border-2 bg-white text-black p-3'>Edit Post</button>
        </form>

      }
    </div>
  )
}

export default PostDetails
