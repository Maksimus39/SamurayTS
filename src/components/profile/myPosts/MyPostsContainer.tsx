import {addPost} from "../../redux/reducer/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {PostDataType} from "../../redux/store";

export type MapStatePropsType = {
    posts: PostDataType[]
}
export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostType = MapStatePropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts)


