import {ActionsTypes} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";


let initialState: InitialStateAuthReducerType = {
    initialized: false
};

export type InitialStateAuthReducerType = {
    initialized: boolean
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateAuthReducerType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: "INITIALIZED-SUCCESS",
    } as const
}


export interface Action<T = any> {
    type: T
}


export const initializeApp = () => (dispatch: ThunkDispatch<InitialStateAuthReducerType, void, Action>) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })


}