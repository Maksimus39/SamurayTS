import React from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi how are you', likesCount: 15},
        {id: 2, message: 'it`s my first post', likesCount: 20},
    ]

    let postDataElement = postData.map((postData)=>{
        return (
            <Post message={postData.message} likesCount={postData.likesCount}/>
        )
    })

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>

            <div className={classes.posts}>

                {postDataElement}
            </div>
        </div>
    );
};

