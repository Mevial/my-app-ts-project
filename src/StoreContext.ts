import React from "react";
import {store} from "./Redux/redux-store";
import {Store} from "redux";

export const StoreContext = React.createContext<Store>(store)

// const Provider = (props: any) => {
//    return <StoreContext.Provider value={props.store}>
//          {props.children}
//          </StoreContext.Provider>
//  }



