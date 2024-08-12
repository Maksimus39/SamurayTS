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
import {DispatchType, RootStateType} from "./components/redux/store";

type AppProps = {
    state: RootStateType
    dispatch: (action: DispatchType) => void
}

function App(props: AppProps) {

    return (

        <div className={'app-wrapper'}>

            <Header/>
            <Navbar friends={props.state.sidebarPage.friends}/>

            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}
                       />}
                />
                <Route path={'/dialogs'}
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              newMessageText={props.state.dialogsPage.newMessageText}
                                              dispatch={props.dispatch}
                       />}/>

                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
