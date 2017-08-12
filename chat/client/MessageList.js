import React from 'react';

import styles from '../style/MessageList.css';

const MessageList = (props) => {
    const messageItems = props.messages.map((message, i) => {
        return (
            <Message
                key={i}
                from={message.from}
                text={message.text}
            />
        );
    })
    return (
        <div className={styles.MessageList}>
            {messageItems}
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={styles.Message}>
            <strong>{props.from} :</strong>
            <span>{props.text}</span>
        </div>
    );
}

export default MessageList;