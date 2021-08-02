import React from 'react';
import {ActionsTypes, PostType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action:ActionsTypes) => {
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