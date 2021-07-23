import React from 'react';

import './index.css';

import state, {RootStateType, subscribe, addPost, changeNewText} from "./Redux/state";

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewText={changeNewText} />
        </BrowserRouter>, document.getElementById('root'));
}
renderTree();

subscribe(renderTree)