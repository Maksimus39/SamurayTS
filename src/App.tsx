import React from "react";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import './App.css'
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Musik";
import {Settings} from "./components/settings/Settings";
import {DialogsDataType, MessageDataType, PostsType} from "./index";


type Props = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
    posts: PostsType[]
}
export const App = ({dialogsData, messageData, posts}: Props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}