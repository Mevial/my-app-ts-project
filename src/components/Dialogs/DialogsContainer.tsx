import React, {ChangeEvent} from "react";

import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {ActionsTypes, DialogPageType, sendMessageAC,} from "../../Redux/store";
import {updateNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/redux-store";

type DialogsPropsType = {
    // dialogsPage: DialogPageType
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
}

export default DialogsContainer