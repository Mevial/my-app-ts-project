import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

type PropsMyPostsType = {
    profileValue: string | number
}

const MyPosts: React.FC<PropsMyPostsType> = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message='Hi, how are you?' postsValue={props.profileValue} likesCount={0}/>
                <Post message='Hi, how are you?' postsValue={props.profileValue} likesCount={23}/>
            </div>
        </div>
    )
}

 export default MyPosts