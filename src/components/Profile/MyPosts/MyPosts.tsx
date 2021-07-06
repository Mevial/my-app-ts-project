import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

type PropsPosDataType = {
    message: string
    likesCount: number
}

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Hi, Yo', likesCount: 10}
]

let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

const MyPosts: React.FC<PropsPosDataType> = (props) => {
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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts