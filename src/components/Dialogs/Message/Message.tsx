import React from "react";
import styles from '../Dialogs.module.css'
import {MessageType} from "../../../Redux/state";


type MessagePropsType = {
    message: MessageType
}


const Message = (props: MessagePropsType) => {


    return (
        <div>
            <div className={styles.dialog}>{props.message.message}</div>
        </div>)
}

export default Message