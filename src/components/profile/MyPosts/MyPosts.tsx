import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {

    // let posts = [
    //     {id: 1, like: 10, message: 'Привет как дела'},
    //     {id: 2, like: 10, message: 'Мы будем сегодня кодить'}
    // ]

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