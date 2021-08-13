import {combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./users-reducer";
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});


export const store = createStore(rootReducer);

export type StoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
