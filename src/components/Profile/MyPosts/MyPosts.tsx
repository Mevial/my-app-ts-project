import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

type PropsMyPostsType = {
    message: string
    likesCount: number
}

let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Hi, Yo', likesCount: 10}
]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts