import './index.css';
import {addPost, RootStateType, state, subscribe, updateNewPostText} from "./components/redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export let rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireThree(state);


subscribe(() => rerenderEntireThree(state))

