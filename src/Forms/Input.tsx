import React from 'react';
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import cl from './input.module.css'


export type FormControlType = {
    input: WrappedFieldProps
    meta: WrappedFieldMetaProps
    child: React.ReactNode
}

export const FormControl: React.FC<FormControlType> = ({ input, meta, child, ...props }) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={cl.form_control + " " + (hasError ? cl.error : "")} >
            <div>
                {props.children}
            </div>
            {
                hasError && <span>{meta.error} </span>}
        </div>
    )
}
export const TextArea: React.FC<WrappedFieldProps & FormControlType> = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props} > <textarea {...input} {...restProps} /></FormControl >
    )
}

export const Input: React.FC<WrappedFieldProps & FormControlType> = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props} > <input {...input} {...restProps} /></FormControl >
    )
}