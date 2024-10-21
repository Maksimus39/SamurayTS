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
                    <Route path={'/profile'} render={() => <Profile posts={posts}/> }/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}