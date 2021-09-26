import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FromsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FromDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'}
                        name={'login'}
                        component={Input}
                        validate={[required]}
            /></div>
            <div><Field placeholder={'Password'}
                        name={'password'}
                        component={Input}
                        validate={[required]}
            /></div>
            <div><Field type={'checkbox'}
                        name={'rememberMe'}
                        component={Input}
                        validate={[required]}
            /> remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FromDataType>({
    form: 'login'
})(LoginForm)


const Login = () => {
    const onSubmit = (formData: FromDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
export default Login;