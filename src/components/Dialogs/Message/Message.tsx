import React from "react";
import styles from '../Dialogs.module.css'
import {MessageType} from "../../../Redux/state";


type MessagePropsType = {
    message: MessageType
}


const Message = (props: MessagePropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        alert(newMessageElement.current?.value);
    }
    return (
        <div>
            <div className={styles.dialog}>{props.message.message}</div>
            <div>
                <textarea ref={newMessageElement}/>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>)
}

export default Message