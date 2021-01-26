import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Input, TextArea } from '../../../Forms/Input';
import cl from './ProfileInfo.module.css';
import { ProfileType } from '../../../types/types';

type PropsType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            {error && <div className={cl.formErrorSummary}>
                {error}
            </div>
            }
            <div>
                <b>Full name:</b>
                <Field placeholder={'Full name'} name={'fullName'} component={Input} />
            </div>
            <div>
                <b>Looking for a job:</b>
                <Field type={'checkbox'} component={Input} name={'lookingForAJob'} />
            </div>
            <div>
                <b>My professional skills:</b>
                <Field placeholder={'My professional skills'}
                    name={'lookingForAJobDescription'} component={TextArea} />
            </div>
            <div>
                <b>About Me:</b>
                <Field
                    placeholder={'About me'} name={'aboutMe'} component={TextArea} />
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div className={cl.contact} key={key}>
                        <b>{key}: <Field placeholder={key} name={'contacts.' + key}
                            component={Input} /></b>
                    </div>
                })}
            </div>
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm)
export default ProfileDataFormRedux