import React from 'react'

const CommentForm = ({commentForm, handleCommentChange, handleCommentSubmit}) => {


    return (
        <div>
            <form onSubmit={handleCommentSubmit} className='flex flex-col items-center my-5'>
                <input
                    type="text"
                    id="text"
                    placeholder="Your thoughts?"
                    onChange={handleCommentChange}
                    value={commentForm.text}
                    maxLength={255}
                />
                <button type="submit" className='border-2 rounded-lg bg-white text-black p-2 my-2'>Comment</button>
            </form>

        </div>
    )
}

export default CommentForm