import React from 'react'

const CreatePost = () => {


    return (
        <div>
            <form onSubmit={handlePostSubmit}>

                {/* <label htmlFor="name">Recipe Name</label> */}
                <input
                    type="text"
                    id="content"
                    placeholder="What's your take?"
                    onChange={handleRecipeChange}
                    value={recipeState.name}
                />
            </form>

        </div>
    )
}

export default CreatePost
