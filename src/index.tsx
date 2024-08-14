import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {AppRootStateType, store} from "./components/redux/redux-store";
import {StoreContext} from "./components/StoreContext";


export let rerenderEntireThree = (state: AppRootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>

        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireThree(store.getState());

store.subscribe(() => rerenderEntireThree(store.getState()))

