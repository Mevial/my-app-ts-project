import React from "react";

import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";


// type MapStateToProps = {
//     dialogsPage:
// }
let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth

    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))

        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

