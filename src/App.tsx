import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DialogDataType, MessagesDataType, PostDataType} from "./index";
import {Profile} from "./components/profile/Profile";

type AppProps = {
    dialogs: DialogDataType[]
    messages: MessagesDataType[]
    posts: PostDataType[]
}

function App(props: AppProps) {


    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>

                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
