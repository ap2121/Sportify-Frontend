import React from 'react'

const EditPost = ({editData, handlePostChange, handlePostEdit}) => {

    return (
        <div>
            <form onSubmit={handlePostEdit}>
                <input
                    type="text"
                    id="content"
                    placeholder="What's your take?"
                    onChange={handlePostChange}
                    value={editData.content}
                />
                <button type="submit">Edit</button>
            </form>

        </div>
    )
}

export default EditPost