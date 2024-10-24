import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";


type Props = {
    posts: PostsType[];
}
export const MyPosts = ({posts}:Props) => {

    let postsElement = posts.map(p => {
        return <Post like={p.like} message={p.message}/>
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = ()=>{
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={styles.imagesApp}>

                    {postsElement}
                </div>
            </div>
        </div>
    )
}