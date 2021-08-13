import {ActionsTypes} from "./redux-store";


type UserLocation = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocation
}

let initialState: InitialStateUserReducerType = {
    users: []
};


export type InitialStateUserReducerType = {
    users: [] | Array<UserType>
}

export const usersReducer = (state: InitialStateUserReducerType = initialState, action: ActionsTypes): InitialStateUserReducerType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}