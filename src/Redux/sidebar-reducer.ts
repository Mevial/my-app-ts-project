import React from 'react';
import {ActionsTypes} from "./redux-store";


export type SidebarType = {}

let initialState = {

}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {

    return state
};