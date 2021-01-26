import React, { useEffect, useState } from 'react';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return (<div>
        <Chat />
    </div>

    )
}

const Chat: React.FC = () => {
    return (<div>
        <Messages></Messages>
        <AddMessagesForm />
    </div>

    )
}

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        ws.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    return (<div>
        {messages.map((m, index) => <Message key={index} message={m} />)}
    </div>

    )
}

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {

    return (<div>
        <img src={message.photo} style={{ width: '30px' }} alt={''} /> <b>{message.userName}</b>
        <br />
        {message.message}
        <hr />
    </div>

    )
}

const AddMessagesForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        ws.addEventListener('open', () => {
            setReadyStatus('ready');
        })
    }, [])

    const sendMessage = () => {
        if (!message) {
            return
        }
        ws.send(message)
        setMessage('')
    }

    return (<div><div>
        <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}
        ></textarea>
    </div>
        <div>
            <button disabled={readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
        </div>
    </div>
    )
}

export default ChatPage