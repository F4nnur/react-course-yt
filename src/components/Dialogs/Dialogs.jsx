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
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
            </div>
            <div className={s.Messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;