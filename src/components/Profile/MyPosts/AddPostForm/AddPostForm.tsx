import React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import cl from '../MyPosts.module.css';
import { required, maxLengthCreator } from '../../../../Utils/validators';
import { TextArea } from '../../../../Forms/Input';
import { AddPostFormValuesType } from '../MyPosts';

type PropsType = {}



const maxLength10 = maxLengthCreator(10);

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (<form onSubmit={props.handleSubmit} className={cl.sendPost}>
        <Field
            validate={[required, maxLength10]}
            name='newPostBody'
            component={TextArea}
            placeholder='send Post...'
            className={cl.area}></Field>
        <button className={cl.btn}>Add</button>
    </form>)
}
export default reduxForm<AddPostFormValuesType>({ form: 'ProfileAddNewPostForm' })(AddPostForm);