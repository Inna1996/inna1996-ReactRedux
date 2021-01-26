import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form';
import { Input, FormControlType } from '../../Forms/Input';
import { FieldValidatorsType, required } from '../../Utils/validators';
import { login } from '../../Redux/auth_reducer';
import { Redirect } from 'react-router-dom';
import cl from '../../Forms/input.module.css';
import { AppStateType } from '../../Redux/redux-store';

type LoginFormOwnProps = {
    captchaUrl: string | null
}
// type FieldType = {
//     placeholder: string | null
//     name: LoginFormValuesKeysType
//     component: React.FC<WrappedFieldProps & FormControlType>
//     validate: Array<FieldValidatorsType>
// }
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {

    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field placeholder={'email'} name={'email'} component={Input}
                    validate={[required]} />
            </div>
            < div >
                <Field placeholder={'password'} name={'password'} component={Input} type='password'
                    validate={[required]} />
            </div>
            < div >
                <Field type={'checkbox'} component={Input} name={'rememberMe'}
                    validate={[required]} /> remember me
        </div>
            < div >
                {captchaUrl && <img src={captchaUrl} alt='captcha' />}
                {
                    captchaUrl && <Field name={'captcha'} component={Input}
                        validate={[required]} />}
                {error && <div className={cl.formErrorSummary}>
                    {error}
                </div>
                }
                <button>Login</button>
            </div>

        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}
type LoginFormValuesKeysType = Extract<keyof LoginFormValuesType, string>


const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (<div>
        <h1>Login </h1>
        < LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});
export default connect(mapStateToProps, { login })(Login);