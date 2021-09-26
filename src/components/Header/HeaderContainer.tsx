import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getAuthUserData, logout} from "../../Redux/auth-reducer";


type MapStateToProps = {
    isAuth: boolean,
    login: string
}
type MapDispatchToProps = {
    getAuthUserData: () => void
    logout: () => void

}

export type HeaderPropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
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

export default connect(MapStateToProps, {getAuthUserData, logout})(HeaderContainer);