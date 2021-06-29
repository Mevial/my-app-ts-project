import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

type PropsMyPostsType = {
    postsValue: string | number
}

const MyPosts: React.FC<PropsMyPostsType> = (props) => {
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post message='Hi, how are you?' postsValue={props.postsValue} likesCount={0}/>
                <Post message='Hi, Yo' postsValue={props.postsValue} likesCount={23}/>
            </div>
        </div>
    )
}

export default MyPosts