import React from "react";
import {sendMessageAC,} from "../../Redux/store";
import {updateNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            //фигурные скопки должны быть на новой строке в этом месте.
            // let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyAC(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer