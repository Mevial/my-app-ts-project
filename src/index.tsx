import React from 'react';

import './index.css';

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/redux-store";
import { StoreContext } from './StoreContext';


export const renderTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}


renderTree();

store.subscribe(renderTree);

