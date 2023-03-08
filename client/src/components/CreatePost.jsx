import React from 'react'

const CreatePost = ({createPost, handlePostChange, handlePostSubmit}) => {


    return (
        <div className=''>
  <form onSubmit={handlePostSubmit} className=" rounded-lg  p-6 flex items-center">
    <input
      type="text"
      id="content"
      className="appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="What's your take..."
      value={createPost.content}
      onChange={handlePostChange}
    />
    <button type="submit" className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline">
      Post
    </button>
  </form>
</div>

    )
}

export default CreatePost
