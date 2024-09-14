import React, {useRef} from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";
import {MyPostType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const MyPosts = (props: MyPostType) => {

    let postDataElement = props.posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const onAddPost = (values: OnnAddPostValuesType) => {
        // if (newPostElement.current) {
        //     const text = newPostElement.current.value;
        //     props.addPost(text)
        // }
        props.addPost(values.newPostText)
    };

    // const onPostChange = () => {
    //     if (newPostElement.current) {
    //         const text = newPostElement.current.value;
    //         if (text.trim() !== "") {
    //             props.updateNewPostText(text)
    //         }
    //     }
    // }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            {/*<form>*/}
            {/*    <div>*/}
            {/*        <textarea ref={newPostElement}*/}
            {/*                  onChange={onPostChange}*/}
            {/*                  value={props.newPostText}*/}
            {/*                  placeholder={'Enter Your Post'}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button onClick={onAddPost}>Add Post</button>*/}
            {/*    </div>*/}
            {/*</form>*/}

            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={classes.posts}>

                {postDataElement}
            </div>
        </div>
    );
};


// Интерфейс для значений формы
interface OnnAddPostValuesType {
    newPostText: string;
}
type AddNewPostFormProps =InjectedFormProps<OnnAddPostValuesType>;

const AddNewPostForm = (props: AddNewPostFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field name={'newPostText'}
                       component={'textarea'}
                       placeholder={'Enter a message...'}/>
            </div>

            <div>
                <button>Add Post</button>
            </div>

        </form>
    )
}

let AddNewPostFormRedux = reduxForm<OnnAddPostValuesType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

