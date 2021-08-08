import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostType, updateNewPostTextAC} from "../../../Redux/store";
import {addPostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {type} from "os";
import {StoreType} from "../../../Redux/redux-store";

type MyPostsType = {
    // message: string
    // posts: Array<PostType>
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}


const MyPostsContainer = (props: MyPostsType) => {
    let state = props.store.getState()

    const addPost = (message: string) => {
        // props.addPostCallback()
        props.store.dispatch({type: "ADD-POST", postMessage: message } )
        // props.changeNewTextCallback(''); //
    }
    const onPostChange = (updateNewPostText: string) => {
        props.store.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: updateNewPostText})
    }


    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} message={state.profilePage.messageForNewPost} />)

}


export default MyPostsContainer