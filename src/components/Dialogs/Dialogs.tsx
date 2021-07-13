import React from "react";

import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {changeNewText, DialogPageType} from "../../Redux/state";

type DialogsPropsType = {
    dialogsPage: DialogPageType
  /*  addPostCallback: (postMessage: string) => void
    message: string
    changeNewTextCallback: (newText: string) => void*/
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem dialogs={d}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs