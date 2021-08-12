import React  from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => { //каждый раз когда происходят изменения в state она запускается, сравниваются внутренность объета
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.messageForNewPost
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (updateNewPostText: string) => {
            dispatch({type: "UPDATE-NEW-POST-TEXT", newText: updateNewPostText})

        },
        addPost: (message: string) => {
            dispatch({type: "ADD-POST", postMessage: message})
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer