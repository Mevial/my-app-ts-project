import React from "react";
import styles from './Music.module.css'

type MusicPropsType = {
musicValue: string
}

const Music: React.FC<MusicPropsType> = (props) => {
    return (
        <div className={styles.content}>
            {props.musicValue}
        </div>
    )
}
export default Music