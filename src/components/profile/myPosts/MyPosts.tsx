import React, {useRef} from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";
import {PostDataType} from "../../redux/state";


type MyPostType = {
    posts: PostDataType[]
    addPost: (postMessage: string) => void;
}
export const MyPosts = (props: MyPostType) => {

    let postDataElement = props.posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })


    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        debugger
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            if (text.trim() !== "") {
                props.addPost(text);
                newPostElement.current.value = ""; // Очистка текстового поля после добавления поста
            }
        }
    };


    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>

            <div className={classes.posts}>

                {postDataElement}
            </div>
        </div>
    );
};

