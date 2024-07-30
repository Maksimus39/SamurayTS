import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    message: string
}
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}


let dialogs: DialogDataType[] = [
    {id: "1", name: 'Macsim'},
    {id: "2", name: 'Larisa'},
    {id: "3", name: 'Andrey'},
    {id: "4", name: 'Bogdan'},
]
let messages: MessagesDataType[] = [
    {message: 'Привет, как твои дела?'},
    {message: 'Привет, ты будешь ужинать!'},
    {message: 'Мам, можно я пойду погуляю с друзьями?'},
    {message: 'Пап, помоги мне с домашним заданием по математике.'},
]
let posts: PostDataType[] = [
    {id: 1, message: 'Hi how are you', likesCount: 15},
    {id: 2, message: 'it`s my first post', likesCount: 20},
]


ReactDOM.render(
    <App
        dialogs={dialogs}
        messages={messages}
        posts={posts}
    />,
    document.getElementById('root')
);