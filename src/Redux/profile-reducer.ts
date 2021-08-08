import React from 'react';
import {ActionsTypes, PostType, ProfilePageType} from "./store";



let initialState = {
    messageForNewPost: "",
        posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Hi, Yo', likesCount: 10}
]
};


export const profileReducer = (state: ProfilePageType = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.messageForNewPost = '';
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.messageForNewPost = action.newText;
            return state
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