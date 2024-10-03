import React from "react";
import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {Profile} from "./Profile";
import './App.css'

export const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    )

}