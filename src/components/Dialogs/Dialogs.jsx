import React from 'react';
import s from './Dialogs.module.scss';

const Dialogs = (props) => {
    let message = React.createRef();

    let sendMessage = () => {
        props.sendMessage(message.current.value)
    };

    let onMessageChange = () => {
        props.onMessageChange(message.current.value)
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {props.dialogElements}
            </div>
            <div className={s.Messages}>
                {props.messageElements}
            </div>
            <div>
                <textarea
                    ref={message}
                    onChange={onMessageChange}
                    value={props.newMessageBody}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;