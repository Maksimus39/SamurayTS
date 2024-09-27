import {addPost, deletePost, profilePageReducer} from "../reducer/profilePageReducer";
import {ProfilePageType} from "../store";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi how are you', likesCount: 15},
        {id: 2, message: 'it`s my first post', likesCount: 20},
    ],
    profile: null,
    status: ''
};


it('length of posts should be incremented', () => {
    // test data
    let action = addPost('it-kamasutra.com');

    // action
    let newState = profilePageReducer(initialState, action);

    // expectation
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe('it-kamasutra.com');
    expect(newState.posts[2].likesCount).toBe(0);
});
it('should add a new post with correct message', () => {
    // test data
    let action = addPost('it-kamasutra.com');

    // action
    let newState = profilePageReducer(initialState, action);

    // expectation

    expect(newState.posts[2].message).toBe('it-kamasutra.com');
    expect(newState.posts[2].likesCount).toBe(0);
});
it('should add a new post with correct  likes count', () => {
    // test data
    let action = addPost('it-kamasutra.com');

    // action
    let newState = profilePageReducer(initialState, action);

    // expectation

    expect(newState.posts[2].likesCount).toBe(0);
});
it('after deleting length of message should be decrement', () => {
    // test data
    let action = deletePost(1);

    // action
    let newState = profilePageReducer(initialState, action);

    // expectation
    expect(newState.posts.length).toBe(1);
});