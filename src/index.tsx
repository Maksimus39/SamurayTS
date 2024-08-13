import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {AppRootStateType, store} from "./components/redux/redux-store";


export let rerenderEntireThree = (state: AppRootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireThree(store.getState());

store.subscribe(() => rerenderEntireThree(store.getState()))

