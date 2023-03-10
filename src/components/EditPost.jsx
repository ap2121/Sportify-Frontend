import React from 'react'

const EditPost = ({ editData, handlePostChange, handlePostEdit }) => {

    return (
        <div>
            <form onSubmit={handlePostEdit} className='flex flex-col items-center my-5'>
                <textarea
                    className='border-2 rounded-md resize-none w-60 h-20'
                    type="text"
                    id="content"
                    placeholder="What's your take?"
                    onChange={handlePostChange}
                    value={editData.content}
                    maxLength={255}
                />

                <input
                    className='border-2 rounded-md resize-none w-60'
                    type="text"
                    id="image"
                    placeholder="Image URL"
                    value={editData.image}
                    onChange={handlePostChange}
                    maxLength={255}
                />
                <button type="submit" className="inline-block border-2 rounded-lg bg-white hover:bg-slate-700 hover:text-white text-gray-500 font-semibold py-2 px-4 my-2 transition-all duration-200 ease-in-out transform  hover:scale-110">Edit</button>
        </form>

        </div >
    )
}

export default EditPost