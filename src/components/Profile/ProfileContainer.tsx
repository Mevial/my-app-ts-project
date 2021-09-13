import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfile} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type MapStateToProps = {
    profile: any

}
type MapDispatchToProps = {
    getUserProfile: (userId: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStateToProps & MapDispatchToProps

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));