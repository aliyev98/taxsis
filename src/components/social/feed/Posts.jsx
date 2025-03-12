import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'

const Posts = () => {



    return (
        <div className="posts-container col-6 d-flex flex-column">

            <CreatePost />

            <div className="line"></div>

            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}

export default Posts