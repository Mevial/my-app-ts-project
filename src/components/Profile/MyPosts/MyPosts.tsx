import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../Redux/store";
import {addPostAC} from "../../../Redux/profile-reducer";

type MyPostsType = {
    message: string
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostsType) => {
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        debugger
        //props.addPostCallback(props.message)
        props.dispatch(addPostAC(props.message))
        // props.changeNewTextCallback(''); //
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.changeNewTextCallback(e.currentTarget.value);
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: (e.currentTarget.value)})
    }


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={newTextChangeHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts