import React, {useRef} from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";
import {PostDataType} from "../../redux/state";


type MyPostType = {
    posts: PostDataType[]
    newPostText: string
    addPost: () => void;
    updateNewPostText: (newText: string) => void
}
export const MyPosts = (props: MyPostType) => {

    let postDataElement = props.posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })


    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        props.addPost()
    };

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            if (text.trim() !== "") {
                props.updateNewPostText(text);
            }
        }
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
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

