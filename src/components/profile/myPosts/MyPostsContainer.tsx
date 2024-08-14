import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducer/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                const addPost = (newPostText: string) => {
                    let action = addPostActionCreator(newPostText);
                    store.dispatch(action);
                };

                const onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        newPostText={state.profilePage.newPostText}
                        posts={state.profilePage.posts}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};