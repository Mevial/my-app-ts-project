import {ActionsTypes} from "./redux-store";


type UserLocation = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: any
    followed: any
    name: string
    status: string
    location: UserLocation
}

let initialState: InitialStateUserReducerType = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1
};

export type InitialStateUserReducerType = {
    users: [] | Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
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
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
            case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}