import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../index";

type Props = {
    posts: PostsType[]
}
export const MyPosts = ({posts}:Props) => {

    let postsElement = posts.map(p => {
        return <Post like={p.like} message={p.message}/>
    })

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={styles.imagesApp}>

                    {postsElement}
                </div>
            </div>
        </div>
    )
}