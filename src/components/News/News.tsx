import React from "react";
import styles from './News.module.css'

type NewsPropsType = {
newsValue: string
}

const News: React.FC<NewsPropsType> = (props) => {
    return (
        <div className={styles.content}>
            {props.newsValue}
        </div>
    )
}

export default News