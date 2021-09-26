import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";


let initialState: InitialStateAuthReducerType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export type InitialStateAuthReducerType = {
    userId: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateAuthReducerType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: any, email: any, login: any, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export interface Action<T = any> {
    type: T
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<InitialStateAuthReducerType, void, Action>) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}


export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


