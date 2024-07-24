import React from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <div className={classes.posts}>
                <Post message={'Hi how are you'}/>
                <Post message={'it`s my first post'}/>
            </div>
        </div>
    );
};

