import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {Profile} from "./components/profile/Profile";
import {DispatchType, RootStateType} from "./components/redux/store";
import {Store} from "redux";
import {AppRootStateType} from "./components/redux/redux-store";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

type AppProps = {
    state: RootStateType
    dispatch: (action: DispatchType) => void
    store: Store<AppRootStateType>
}

function App(props: AppProps) {

    return (

        <div className={'app-wrapper'}>

            <Header/>
            <Navbar friends={props.state.sidebarPage.friends}/>

            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile
                           store={props.store}
                       />}
                />
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer store={props.store}
                       />}/>

                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
