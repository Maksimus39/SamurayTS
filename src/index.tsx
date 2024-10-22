import './index.css';
import React from "react";
import {App} from "./App";
import ReactDOM from 'react-dom';
import {state} from "./redux/state";


ReactDOM.render(<App state={state}/>, document.getElementById('root'));





