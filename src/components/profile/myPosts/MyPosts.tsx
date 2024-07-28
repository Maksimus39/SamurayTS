import React from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi how are you', likesCount: 15},
        {id: 2, message: 'it`s my first post', likesCount: 20},
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
};

