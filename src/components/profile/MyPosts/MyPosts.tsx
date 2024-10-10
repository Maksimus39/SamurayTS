import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={styles.imagesApp}>
                    <Post like={10} message={'Привет как дела'}/>
                    <Post like={20} message={'Мы будем сегодня кодить?'}/>
                    <Post like={30}/>
                </div>
            </div>
        </div>
    )
}