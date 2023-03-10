import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import EditPost from './EditPost'
import CommentForm from './CommentForm'
import Client from '../services/api'

const PostDetails = ({ user }) => {

  let navigate = useNavigate()

  const initialCommentState = {
    text: ''
  }

  const [postDetails, setPostDetails] = useState(null)
  const [edit, setEdit] = useState(false)
  const [editData, setEditData] = useState()
  const [comments, setComments] = useState()
  const [commentForm, setCommentForm] = useState(initialCommentState)


  let { id } = useParams()

  const handleDeletePost = async (postID, sportID) => {
    const id = sportID
    await Client.delete(`/api/posts/delete-post/${postID}`)
    navigate(`/leaguePage/${id}`)
  }

  const getPostDetails = async () => {
    const response = await Client.get(`/api/posts/get-post/${id}`)
    setPostDetails(response.data)
    setEditData(response.data)
  }

  const getAllComments = async () => {
    const response = await Client.get(`/api/comments/get-all-comments/${id}`)
    setComments(response.data)
  }

  useEffect(() => {
    getPostDetails()
    getAllComments()
  }, [id])

  const handlePostChange = (evt) => {
    setEditData({ ...editData, [evt.target.id]: evt.target.value })
  }

  const handlePostEdit = async (e) => {
    e.preventDefault()
    await Client.put(`/api/posts/edit-post/${id}`, editData)
    setEdit(false)
    getPostDetails()
  }

  const toggleEdit = () => {
    setEdit(!edit)
  }

  const handleCommentChange = (evt) => {
    setCommentForm({ ...CommentForm, [evt.target.id]: evt.target.value })
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    if (commentForm) {
      await Client.post(`/api/comments/create-comment/${user.id}/${id}`, commentForm)
    }
    setCommentForm(initialCommentState)
    getAllComments()

  }

  return postDetails && (
    <div className='min-h-screen bg-slate-100'>
      {parseInt(user?.id) === parseInt(postDetails?.User?.id) ?
        <div className='border-2 rounded-lg p-10 max-w-xl mx-auto bg-white'>
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
            <button className="inline-block border-2 rounded-lg bg-white hover:bg-slate-700 hover:text-white text-gray-500 font-semibold py-2 px-4 my-2 transition-all duration-200 ease-in-out transform  hover:scale-110" onClick={() => handleDeletePost(postDetails.id, postDetails.Sport.id)}>Delete Post</button>
            <button className="inline-block border-2 rounded-lg bg-white hover:bg-slate-700 hover:text-white text-gray-500 font-semibold py-2 px-4 my-2 transition-all duration-200 ease-in-out transform  hover:scale-110" onClick={toggleEdit}>Edit Post</button>
          </div>
          {edit && <EditPost editData={editData} handlePostChange={handlePostChange} handlePostEdit={handlePostEdit} />}
        </div> :
        <div className='border-2 rounded-lg p-10 max-w-xl mx-auto bg-white'>
          <div className='flex flex-col justify-start font-bold'>
            <p className='text-3xl flex justify-start'>@
              {postDetails.User.username}
            </p>
            <p className='flex justify-start text-slate-400 mt-3'>{postDetails.createdAt.split('T')[0]}</p>
          </div>
          <h3 className=' flex justify-start text-xl my-3'>{postDetails?.content}</h3>
          <img src={postDetails.image} alt={postDetails?.image} className='rounded-md' />
        </div>
      }

      <div>
        {user?.id &&
          <CommentForm handleCommentSubmit={handleCommentSubmit} handleCommentChange={handleCommentChange} commentForm={commentForm} />}
      </div>
      <div className=''>
        {comments?.length > 0 && comments.map((comment) => (
          <div key={comment.id} className='border-2 rounded-lg p-10 max-w-xl mx-auto mt-6 bg-white'>
            <div className='flex flex-row justify-start mb-2 items-center'>
              <p className='text-xl font-bold'>@{comment.User.username}</p>
              <p className='ml-1 font-bold text-slate-400'>·</p>
              <p className='flex justify-start text-slate-400 ml-1'>{comment.createdAt.split('T')[0]}</p>
            </div>
            <div className='flex flex-col'>
              <p className='italic flex text-slate-400'> replying to @{postDetails.User.username}</p>
              <p className='flex justify-start mt-2'>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}
export default PostDetails