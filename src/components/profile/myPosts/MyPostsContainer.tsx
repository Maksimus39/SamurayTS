import {addPost, updateNewPostText} from "../../redux/reducer/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {PostDataType} from "../../redux/store";

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

export const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost
})(MyPosts)


