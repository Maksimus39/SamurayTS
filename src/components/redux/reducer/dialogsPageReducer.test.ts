import {addPost, deletePost, profilePageReducer} from "./profilePageReducer";
import {ProfilePageType} from "../store";

// initial state
let state: ProfilePageType = {
    posts: [
        {id: new Date().getTime(), message: 'Hi how are you', likesCount: 15},
        {id: new Date().getTime(), message: 'it`s my first post', likesCount: 20},
    ],
    profile: null,
    status: ''
}


it(`length of posts should be incremented`, () => {
    // 1. test data
    let action = addPost('it-kamasutra.com')
    // 2. action
    let newState = profilePageReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

it(`test name message`, () => {
    // 1. test data
    let action = addPost('it-kamasutra.com')
    // 2. action
    let newState = profilePageReducer(state, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra.com')
})

it(`after deleting length of message should be corrected`, () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profilePageReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(2)
})


it(`after deleting length shouldn be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(10)
    // 2. action
    let newState = profilePageReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(2)
})


