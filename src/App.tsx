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
import {RootStateType} from "./redux/state";


type Props = {
    state: RootStateType
}

export const App = ({state}: Props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={state.dialogPage.posts}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogsData={state.profilePage.dialogsData}
                                                  messageData={state.profilePage.messageData}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}