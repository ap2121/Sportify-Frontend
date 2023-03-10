import React from 'react'

const CreatePost = ({ createPost, handlePostChange, handlePostSubmit }) => {

    return (
        <div className=''>
            <form onSubmit={handlePostSubmit} className=" rounded-lg p-6 flex justify-center w-full">
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row justify-center'>
                        <textarea
                            type="text"
                            id="content"
                            className="appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20 resize-none"
                            placeholder="What's your take..."
                            value={createPost.content}
                            onChange={handlePostChange}
                            maxLength={255}
                        />

                    </div>
                    <div>
                        <input
                            type="text"
                            id="image"
                            className="appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Image URL"
                            value={createPost.image}
                            onChange={handlePostChange}
                            maxLength={255}
                        />
                    </div>
                </div>
                <button type="submit" className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-6 px-4 rounded-r focus:outline-none focus:shadow-outline">
                    Post
                </button>
            </form>
        </div>

    )
}

export default CreatePost
