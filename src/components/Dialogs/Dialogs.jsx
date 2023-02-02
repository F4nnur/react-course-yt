import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {props.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.Messages}>
                {props.messageData.map(message => <Message message={message.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;