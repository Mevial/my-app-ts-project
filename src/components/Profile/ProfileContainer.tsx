import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

// userId = '18935'


type PathParamsType = {
    userId: string
}

type MapStateToProps = {
    profile: string
    status: string
    authorizedUserId: string| null
    isAuth: boolean
}
type MapDispatchToProps = {
    getUserProfile: (userId: string ) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}



type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStateToProps & MapDispatchToProps

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId: string|null = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        if (userId){
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }

    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export default compose<React.ComponentType>(
    connect<MapStateToProps, MapDispatchToProps, {},AppStateType>(mapStateToProps, { getUserStatus, getUserProfile,updateUserStatus}),
    withRouter,
)(ProfileContainer)
