import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {Profile} from "./components/profile/Profile";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";







function App() {

    return (

        <div className={'app-wrapper'}>

            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile/>}/>

                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>

                <Route path={'/users'} render={() => <UsersContainer/>}/>

                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
