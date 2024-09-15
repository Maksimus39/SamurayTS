import React from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./posts/Post";
import {MyPostType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/FormsControls";


export const MyPosts = (props: MyPostType) => {

    let postDataElement = props.posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })


    const onAddPost = (values: OnnAddPostValuesType) => {
        props.addPost(values.newPostText)
    };


    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>

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

type AddNewPostFormProps = InjectedFormProps<OnnAddPostValuesType>;


const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: AddNewPostFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field name={'newPostText'}
                       component={Textarea}
                       placeholder={'Enter a message...'}
                       validate={[required, maxLength10]}
                />
            </div>

            <div>
                <button>Add Post</button>
            </div>

        </form>
    )
}

let AddNewPostFormRedux = reduxForm<OnnAddPostValuesType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

