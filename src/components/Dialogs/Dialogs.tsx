import React, {ChangeEvent} from "react";

import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {ActionsTypes, DialogPageType, sendMessageAC, updateNewMessageBodyAC} from "../../Redux/state";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem dialogs={d}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body =  e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>

                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  placeholder={'Enter your message'}
                                  onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs