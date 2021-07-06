import React from "react";
import styles from '../Dialogs.module.css'


type MessagePropsType = {
    message: string
    id: number
}


const Message: React.FC<MessagePropsType> = (props) => {
    return <div className={styles.dialog}>{props.message}</div>
}

export default Message