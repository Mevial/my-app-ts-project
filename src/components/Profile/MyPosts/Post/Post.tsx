import React from 'react';
import styles from './Post.module.css';

type PropsPostType = {
    message: string
    likesCount: number
}

const Post = (props: PropsPostType) => {
    return (
        <div className={styles.item}>
            <img src='https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg'/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}


export default Post;