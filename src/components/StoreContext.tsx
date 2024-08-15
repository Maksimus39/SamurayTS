import React from "react";
import {Store} from "redux";
import {AppRootStateType, store} from "./redux/redux-store";


export const StoreContext = React.createContext({} as Store<AppRootStateType>)


export type ProviderType = {
    store: Store<AppRootStateType>
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}