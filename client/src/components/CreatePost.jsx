import React from 'react'

const CreatePost = ({createPost, handlePostChange, handlePostSubmit}) => {


    return (
        <div>
            <form onSubmit={handlePostSubmit}>

                {/* <label htmlFor="name">Recipe Name</label> */}
                <input
                    type="text"
                    id="content"
                    placeholder="What's your take?"
                    onChange={handlePostChange}
                    value={createPost.content}
                />

                <button type="submit">Post</button>
            </form>

        </div>
    )
}

export default CreatePost
