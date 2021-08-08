import React, {ChangeEvent} from 'react';
import MyPosts from "./MyPosts";
import {StoreContext} from '../../../StoreContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                // сверху фича со скобочкой, аккуратно!
                (store) => {
                    const addPost = (message: string) => {
                        // props.addPostCallback()
                        store.dispatch({type: "ADD-POST", postMessage: message})
                        // props.changeNewTextCallback(''); //
                    }
                    const onPostChange = (updateNewPostText: string) => {
                        store.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: updateNewPostText})
                    }
                    let state = store.getState()
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    message={state.profilePage.messageForNewPost}/>
                }}
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer