import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../Redux/profile-reducer";


type MyPostsType = {
    message: string
    posts: Array<PostType>
    updateNewPostText: (text: string) => void
    addPost: (message: string) => void
    // dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostsType) => {
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost(props.message)
        // props.dispatch(addPostAC(props.message))
        // props.changeNewTextCallback('');
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // let text = newPostElement.current.value;
        // props.updateNewPostText(text)
        props.updateNewPostText(e.currentTarget.value);
        // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: (e.currentTarget.value)})
    }


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={newTextChangeHandler}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts