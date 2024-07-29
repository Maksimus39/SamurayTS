import React from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";
import {PostDataType} from "../Profile";



type MyPostType={
     postData:PostDataType[]
}
export const MyPosts = (props:MyPostType) => {

    let postDataElement = props.postData.map((postData) => {
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

