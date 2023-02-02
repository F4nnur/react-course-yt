import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = () => {
    let dialogData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Olya'},
    ];

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'kek'},
        {id: 3, message: 'lol'},
    ]
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.Messages}>
                {messageData.map(message => <Message message={message.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;