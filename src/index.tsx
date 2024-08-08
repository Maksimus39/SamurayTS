import './index.css';
import { RootStateType, store,} from "./components/redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export let rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireThree(store.getState());


store.subscribe(() => rerenderEntireThree(store._state))

