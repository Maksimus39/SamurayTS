import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";
import React from "react";
import {FormControl} from "./FormsControls";

export type TextareaPropsType = {
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