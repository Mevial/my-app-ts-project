import React  from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC} from "../../../Redux/profile-reducer";


let mapStateToProps = (state: AppStateType) => { //каждый раз когда происходят изменения в state она запускается, сравниваются внутренность объета
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.messageForNewPost
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (message: string) => {
            dispatch(addPostAC(message))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer