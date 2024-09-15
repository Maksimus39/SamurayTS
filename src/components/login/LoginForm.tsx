import React from 'react';
import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../utils/validators/validators";

// Интерфейс для данных формы
type LoginFormData = {
    login: string;
    password: string;
    'remember me': boolean;
}

// Интерфейс для пропсов формы
interface LoginFormProps extends InjectedFormProps<LoginFormData, {}> {
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       validate={[required]}
                       name={'login'}
                       component={Input}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]}
                       name={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       name={'remember me'}
                       type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormData, {}>({form: 'login'})(LoginForm);

export const Login = () => {
    // Типизированная функция onSubmit
    const onSubmit = (formData: LoginFormData) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};