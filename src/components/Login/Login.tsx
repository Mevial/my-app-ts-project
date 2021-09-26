import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FromsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import styles from './../common/FromsControls/FormsControls.module.css'


type FromDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Email'}
                        name={'email'}
                        component={Input}
                        validate={[required]}
            /></div>
            <div><Field placeholder={'Password'}
                        name={'password'}
                        type={'password'}
                        component={Input}
                        validate={[required]}
            /></div>
            <div><Field type={'checkbox'}
                        name={'rememberMe'}
                        component={Input}
                        validate={[required]}
            /> remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FromDataType>({
    form: 'login'
})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FromDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);