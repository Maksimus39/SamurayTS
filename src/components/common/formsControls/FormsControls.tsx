import React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form/lib/Field";
import classes from './FormsControls.module.css';

type FormControlPropsType = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    children: React.ReactNode;
};

const FormControl: React.FC<FormControlPropsType> = ({ input, meta, children }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
            <div>
                {React.Children.map(children, child =>
                    React.isValidElement(child) ? React.cloneElement(child, { ...input, ...meta }) : child
                )}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};




type TextareaPropsType = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    [key: string]: any;
};
export const Textarea: React.FC<TextareaPropsType> = (props) => {
    return (
        <FormControl {...props}>
            <textarea {...props.input} {...props} />
        </FormControl>
    );
};
export const Input: React.FC<TextareaPropsType> = (props) => {
    return (
        <FormControl {...props}>
            <input {...props.input} {...props} />
        </FormControl>
    );
};