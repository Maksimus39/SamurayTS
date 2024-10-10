import React from "react";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import './App.css'
import {Dialogs} from "./components/dialogs/Dialogs";

export const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        </div>
    )
}