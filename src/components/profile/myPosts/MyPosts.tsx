import React from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";
import {PostDataType} from "../../redux/state";


type MyPostType = {
    posts: PostDataType[]
}
export const MyPosts = (props: MyPostType) => {

    let postDataElement = props.posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
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

