import {DispatchType, PostDataType, ProfilePageType} from "../state";

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export const profilePageReducer = (state: ProfilePageType, action: DispatchType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:return state
    }
};

