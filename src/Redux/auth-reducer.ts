import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


let initialState: InitialStateAuthReducerType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export type InitialStateAuthReducerType = {
    userId: any,
    email: any,
    login: any,
    isAuth: boolean
}

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateAuthReducerType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {userId, email, login}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
          dispatch(setAuthUserData(id, email, login))
        }
    })
}


