import React from 'react';
import s from './Dialogs.module.scss';

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                <div className={s.Dialog}>
                    Andrey
                </div>
                <div className={s.Dialog}>
                    Dima
                </div>
                <div className={s.Dialog}>
                    Olga
                </div>
            </div>
            <div className={s.Messages}>
                <div className={s.Message}>Hi</div>
                <div className={s.Message}>Hello</div>
                <div className={s.Message}>Kek</div>
            </div>
        </div>
    );
};

export default Dialogs;