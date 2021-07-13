import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../Redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPostCallback: (postMessage: string) => void

}


const MyPosts = (props: MyPostsType) => {
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
       props.addPostCallback(newPostElement.current.value);
    }}
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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