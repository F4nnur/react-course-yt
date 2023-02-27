import React from 'react';
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem";
import Message from "./Message";
import {newMessageAC, sendMessageAC} from "../../reducer/sendMessageReducer";
import {connect} from "react-redux";

let mapState = (state) => {
    return {
        newMessageBody: state.dialogsPage.textForChangeMessage,
        messageElements: state.dialogsPage.messageData.map(message => <Message message={message.message}/>),
        dialogElements: state.dialogsPage.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>),
        isAuth: state.auth.isAuth
    }
}

let mapDispatch = (dispatch) => {
    return {
        onMessageChange: () => {
            dispatch(newMessageAC())
        },
        sendMessage: (text) => {
            dispatch(sendMessageAC(text))
        }
    }
}
const DialogsContainer = connect(mapState, mapDispatch)(Dialogs);

export default DialogsContainer;