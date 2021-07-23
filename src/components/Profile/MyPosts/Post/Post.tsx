import React from 'react';
import styles from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

const Post = (props: PostType) => {
    return (
        <div className={styles.item}>
            <img src='https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg' alt={'img'}/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}


export default Post;