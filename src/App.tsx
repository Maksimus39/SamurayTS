import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {Profile} from "./components/profile/Profile";
import {RootStateType} from "./components/redux/state";

type AppProps = {
    state: RootStateType
}

function App(props: AppProps) {

    return (

        <div className={'app-wrapper'}>

            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>

            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile posts={props.state.messagesPage.posts}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs dialogs={props.state.profilePage.dialogs}
                                              messages={props.state.profilePage.messages}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
