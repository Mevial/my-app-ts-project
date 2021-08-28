import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";


type MapStateToProps = {
    isAuth: boolean,
    login: string
}
type MapDispatchToProps = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export type HeaderPropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {

        return <Header {...this.props}/>
    }
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer);