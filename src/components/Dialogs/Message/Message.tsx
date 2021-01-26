import React from 'react';
import cl from './Message.module.css';

type PropsType = {
    message: string
}

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={cl.wrapper_mess}>
            <div className={cl.messages}>{props.message}</div>
        </div>

    )
}

export default Message;