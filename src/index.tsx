import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./components/redux/redux-store";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



