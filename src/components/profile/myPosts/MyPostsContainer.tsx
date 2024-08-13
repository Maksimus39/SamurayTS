import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducer/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../redux/redux-store";
import {Store} from "redux";


type MyPostsContainerProps = {
    store: Store<AppRootStateType>
}

export const MyPostsContainer = (props: MyPostsContainerProps) => {

    let state = props.store.getState()

    const addPost = (newPostText: string) => {
        let action = addPostActionCreator(newPostText)
        props.store.dispatch(action)
    };

    const onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}
        />
    );
};

