import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostAC, deletePost, profileReducer, setStatus, setUserProfile} from "./profile-reducer";
import {dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {
    followSuccess,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollowSuccess,
    usersReducer, toggleFollowingProgress
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import {appReducer, initializedSuccess} from "./app-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePost>


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type StoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store