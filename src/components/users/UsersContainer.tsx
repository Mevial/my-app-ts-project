import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC,  setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToProps = {
    users: Array<UserType>
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

let MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

    export default connect(MapStateToProps, MapDispatchToProps)(Users);