import React, {FC} from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";
import classes from './FormsControls.module.css';
import {Field} from "redux-form";
import {TextareaPropsType} from "./Textarea";


type FormControlPropsType = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    children: React.ReactNode;
};

export const FormControl: React.FC<FormControlPropsType> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
            <div>
                {React.Children.map(children, child =>
                    React.isValidElement(child) ? React.cloneElement(child, {...input}) : child
                )}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};


export const Input: React.FC<TextareaPropsType> = (props) => {
    return (
        <FormControl {...props}>
            <input {...props.input} {...props} />
        </FormControl>
    );
};


export type ValidatorType = (value: string) => string | undefined;


export const createField = (placeholder: string | null, name: string, validators: ValidatorType[], component: FC<TextareaPropsType>, props = {}) => (
    <div>
        <Field
            placeholder={placeholder || ''}
            name={name}
            validate={validators}
            component={component}
            {...props}
        />
    </div>
);

