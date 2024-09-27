import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {Input, renderField} from "../common/formsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/reducer/authPageReducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import styles from './../common/formsControls/FormsControls.module.css'
import {getIsAuthSelector} from "../redux/functionSelector/headerContainerSelector";

// Интерфейс для данных формы
type LoginFormData = {
    email: string;
    password: string;
    'remember me': boolean;
}

// Интерфейс для пропсов формы
interface LoginFormProps extends InjectedFormProps<LoginFormData, {}> {
}


const LoginForm = ({handleSubmit, error}: LoginFormProps) => {
    return (
        <form onSubmit={handleSubmit}>
            {renderField('Email', 'email', 'text', Input, [required])}
            {renderField('Password', 'password', 'password', Input, [required])}
            {renderField('', 'remember me', 'checkbox', Input, [], true, 'remember me')}

            {error && <div className={styles.formSummaryError}>{error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm<LoginFormData, {}>({form: 'login'})(LoginForm);


type LoginProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = ({login, isAuth}: LoginProps) => {
    const onSubmit = (formData: LoginFormData) => {
        login(formData.email, formData.password, formData["remember me"])
    };
    if (isAuth) {
        return <Redirect to='/profile'/>;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({isAuth: getIsAuthSelector(state)})
export default connect(mapStateToProps, {login})(Login)