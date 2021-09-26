import React from "react";

import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../Redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

type FromDataType = {
    newMessageBody: string
}

export type DialogsPropsType = {
    dialogsPage: DialogPageType
    sendMessage: (values: string) => void
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem dialogs={d} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m} key={m.id}/>);
    // let newMessageBody = state.newMessageBody;

    let addNewMessage = (values: FromDataType) => {
        props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>

                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs


