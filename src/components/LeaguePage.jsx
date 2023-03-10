import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CreatePost from './CreatePost'
import Client from '../services/api'

const LeaguePage = ({ user }) => {

  const initialPostState = {
    content: '',
    image: ''
  }

  const [selectedLeague, setSelectedLeague] = useState()
  const [posts, setPosts] = useState()
  const [createPost, setCreatePost] = useState(initialPostState)

  let { id } = useParams()

  const handlePostChange = (evt) => {
    setCreatePost({ ...createPost, [evt.target.id]: evt.target.value })
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    if (createPost.content || createPost.image) {
      await Client.post(`/api/posts/create-post/${user.id}/${id}`, createPost)
      setCreatePost(initialPostState)
      getSportbyId()
    } else {
      return
    }
  }

  const getSportbyId = async () => {
    const response = await Client.get(`/api/posts/posts-by-sport/${id}`)
    setPosts(response.data)
    setSelectedLeague(response.data[0])
  }

  useEffect(() => {
    getSportbyId()
  }, [id])

  return selectedLeague && (
    <div className="min-h-screen bg-slate-100">
      <div className="relative">
        <img
          src={selectedLeague.Sport.image}
          alt={selectedLeague.Sport.image}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-white">{selectedLeague.Sport.leagueName}</h1>
        </div>
      </div>
      <div className="max-w-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {user?.id && <CreatePost createPost={createPost} handlePostChange={handlePostChange} handlePostSubmit={handlePostSubmit} />}
        <div className="space-y-8 flex flex-col-reverse">
          {posts?.length > 0 && posts.map((post) => (
            <Link key={post.id} to={`/postDetails/${post.id}`} className="block my-8 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-4">
                <h2 className="text-lg font-bold flex justify-start">@{post.User.username}</h2>
                <p className="text-slate-400 mt-2 flex justify-start my-2">{post.createdAt.split('T')[0]}</p>
                <p className="text-gray-700 mt-2 flex justify-start my-2">{post.content}</p>
                <img className='rounded-xl' src={post.image} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

}

export default LeaguePage
