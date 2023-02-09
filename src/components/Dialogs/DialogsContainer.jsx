import React from 'react';
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem";
import Message from "./Message";
import {newMessageAC, sendMessageAC} from "../../reducer/sendMessageReducer";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let dialogElements= state.dialogsPage.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElements = state.dialogsPage.messageData.map(message => <Message message={message.message}/>)
    let newMessageBody = state.textForChangeMessage;

    let sendMessage = (text) => {
        props.store.dispatch(sendMessageAC(text))
    };

    let onMessageChange = (text) => {
        props.store.dispatch(newMessageAC(text))
    }
    return (
        <Dialogs
            onMessageChange={onMessageChange}
            sendMessage={sendMessage}
            newMessageBody={newMessageBody}
            messageElements={messageElements}
            dialogElements={dialogElements}

        />
    );
};

export default DialogsContainer;