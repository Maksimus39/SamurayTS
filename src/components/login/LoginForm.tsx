import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/reducer/authPageReducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import styles from './../common/formsControls/FormsControls.module.css'

// Интерфейс для данных формы
type LoginFormData = {
    email: string;
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
                <Field placeholder={'Email'}
                       name={'email'}
                       validate={[required]}
                       component={Input}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       name={'remember me'}
                       type={"checkbox"}/> remember me
            </div>

            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}

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

const Login = (props: LoginProps) => {
    const onSubmit = (formData: LoginFormData) => {
        props.login(formData.email, formData.password, formData["remember me"])
    };
    if (props.isAuth) {
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
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {login})(Login)