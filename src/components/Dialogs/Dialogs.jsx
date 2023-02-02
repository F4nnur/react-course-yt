import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                <DialogItem name={'Dima'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Olya'} id={'3'}/>
            </div>
            <div className={s.Messages}>
                <Message message={'Hi'}/>
                <Message message={'Kek'}/>
                <Message message={'Lol'}/>
            </div>
        </div>
    );
};

export default Dialogs;