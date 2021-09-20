import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, setStatus, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import thunkMiddleware from "redux-thunk"
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

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
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


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});


export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware) );

export type StoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
