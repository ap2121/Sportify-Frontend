import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState(null)

  let {id} = useParams()

  const getPostDetails = async () => {
    const response = await axios.get(`http://localhost:3001/api/posts/get-post/${id}`)
    console.log(response.data)
  }

  useEffect(() => {
    getPostDetails()
  }, [id])


  return (
    <div>
      
    </div>
  )
}

export default PostDetails
