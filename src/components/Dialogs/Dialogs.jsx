import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem";
import Message from "./Message";
import {sendMessageAC} from "../../redux/state";

const Dialogs = (props) => {
    let message = React.createRef();
    let sendMessage = () => {
        props.dispatch(sendMessageAC(message.current.value))
    };

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.Messages}>
                {props.messageData.messageData.map(message => <Message message={message.message}/>)}
            </div>
            <div>
                <textarea ref={message}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;