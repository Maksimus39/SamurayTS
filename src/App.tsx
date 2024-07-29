import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";


function App() {

    let dialogsData = [
        {id: "1", name: 'Macsim'},
        {id: "2", name: 'Larisa'},
        {id: "3", name: 'Andrey'},
        {id: "4", name: 'Bogdan'},
    ]

    let messagesData = [
        {message: 'Привет, как твои дела?'},
        {message: 'Привет, ты будешь ужинать!'},
        {message: 'Мам, можно я пойду погуляю с друзьями?'},
        {message: 'Пап, помоги мне с домашним заданием по математике.'},
    ]

    let postData = [
        {id: 1, message: 'Hi how are you', likesCount: 15},
        {id: 2, message: 'it`s my first post', likesCount: 20},
    ]

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>

                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile postData={postData}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
