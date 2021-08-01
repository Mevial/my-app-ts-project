import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../Redux/state";

type MyPostsType = {
    message: string
    posts: Array<PostType>
    addPostCallback: (postMessage: string) => void
    changeNewTextCallback: (newText: string) => void
}


const MyPosts = (props: MyPostsType) => {
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        debugger
        props.addPostCallback(props.message)
        // props.changeNewTextCallback(''); // МБ ТУТ НЕ ТАК
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value);
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