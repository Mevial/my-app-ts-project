import {ActionsTypes} from "./redux-store";


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}

let initialState = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hi, Yo', likesCount: 10}
    ]
};


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                messageForNewPost: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostAC = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}