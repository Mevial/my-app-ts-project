import React from 'react';

import './index.css';

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./Redux/state";


export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} addPost={store.addPost.bind(store)} changeNewText={store.changeNewText.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}


renderTree();
store.subscribe(renderTree)
