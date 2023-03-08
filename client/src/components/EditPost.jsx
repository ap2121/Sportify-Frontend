import React from 'react'

const EditPost = ({editData, handlePostChange, handlePostEdit}) => {

    return (
        <div>
            <form onSubmit={handlePostEdit} className='flex flex-col items-center my-5'>
                <input
                    type="text"
                    id="content"
                    placeholder="What's your take?"
                    onChange={handlePostChange}
                    value={editData.content}
                />
                <button type="submit" className='border-2 rounded-lg bg-white text-black p-2 my-2'>Edit</button>
            </form>

        </div>
    )
}

export default EditPost