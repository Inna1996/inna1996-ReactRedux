import React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../../Utils/validators';
import { DialogsFormValuesType } from '../Dialogs';
import { TextArea } from '../../../Forms/Input';
import cl from '../Dialogs.module.css';

const maxLength50 = maxLengthCreator(50)
type PropsType = {}

const AddMessagesForm: React.FC<InjectedFormProps<DialogsFormValuesType, PropsType> & PropsType> = (props) => {
    return (<form onSubmit={props.handleSubmit} className={cl.textarea}>
        <Field
            component={TextArea} className={cl.input}
            validate={[required, maxLength50]}
            placeholder='send Message...'
            name='newMessageBody'></Field>
        <button className={cl.btn}>Send</button>
    </form>)
}

export default reduxForm<DialogsFormValuesType>({ form: 'dialogAddMessageForm' })(AddMessagesForm);