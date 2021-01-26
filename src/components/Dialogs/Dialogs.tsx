import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { InitialStateType } from '../../Redux/dialogs_reducer'

type PropsType = {
    messagesPage: InitialStateType
    sendMessageCreator: (newMessageBody: string) => void
}

export type DialogsFormValuesType = {
    newMessageBody: string
}


const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.messagesPage;
    let dialogsArr = state.dialogsData.map(elem => <DialogItem key={elem.id} name={elem.name} id={elem.id} img={elem.ava} />);
    let messagesArr = state.messagesData.map(mess => <Message key={mess.id} message={mess.messages} />);

    let addNewMessage = (values: DialogsFormValuesType) => {
        props.sendMessageCreator(values.newMessageBody);
    }
    return (<div className={cl.wrapperOut}>
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                {dialogsArr}
            </div>
            <div className={cl.messages}>
                {messagesArr}
            </div>
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
    </div>
    );
};


export default Dialogs;