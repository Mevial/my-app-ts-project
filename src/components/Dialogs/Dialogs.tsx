import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Dialogs.module.css'

type DialogsPropsType = {
    dialogsValue: string
}

type DialogItemPropsType = {
    id: string
    name: string
}
type MessagePropsType = {
    message: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = "/dialogs/" + props.id
    return <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message: React.FC<MessagePropsType> = (props) => {
    return <div className={styles.dialog}>{props.message}</div>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Dimysch" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs