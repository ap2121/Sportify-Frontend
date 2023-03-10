import React from 'react'

const CommentForm = ({ commentForm, handleCommentChange, handleCommentSubmit }) => {


    return (
        <div>
            <form onSubmit={handleCommentSubmit} className='flex flex-col items-center my-5'>
                <textarea
                    className='border-2 rounded-md resize-none w-60 h-20'
                    type="text"
                    id="text"
                    placeholder="Your thoughts?"
                    onChange={handleCommentChange}
                    value={commentForm.text}
                    maxLength={255}
                    required
                />
                <button type="submit" className="inline-block border-2 rounded-lg bg-white hover:bg-slate-700 hover:text-white text-gray-500 font-semibold py-2 px-4 my-2 transition-all duration-200 ease-in-out transform  hover:scale-110">Comment</button>
            </form>

        </div>
    )
}

export default CommentForm