import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducer/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {PostDataType} from "../../redux/store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: PostDataType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
}
export type MyPostType = MapStatePropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: (newPostText: string) => {
            let action = addPostActionCreator(newPostText);
            dispatch(action);
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)