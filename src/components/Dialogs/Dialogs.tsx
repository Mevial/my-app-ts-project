import React, {ChangeEvent} from "react";

import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {ActionsTypes, DialogPageType, sendMessageAC,} from "../../Redux/store";
import {updateNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import {StoreType} from "../../Redux/redux-store";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem dialogs={d}/>);
    let messagesElements = state.messages.map(m => <Message message={m}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
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