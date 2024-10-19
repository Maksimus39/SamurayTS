import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    id: number
    message: string
}

export type PostsType = {
    id: number
    like: number
    message: string
}

export let dialogsData: DialogsDataType[] = [
    {id: 1, name: 'Иван Иванович:'},
    {id: 2, name: 'Анна Петровна:'},
    {id: 3, name: 'Andrey:'},
    {id: 4, name: 'Маша:'}
]

export let messageData: MessageDataType[] = [
    {
        id: 1,
        message: 'Иван Иванович – настоящий мужик! Высокий, крепкий, с румяными щеками.'
    },
    {
        id: 2,
        message: 'Анна Петровна – сердце семьи. Красивая, милая, всегда улыбается. Работает бухгалтером, но дома – настоящая хозяйка.'
    },
    {
        id: 3,
        message: 'Андрей – шумный, непоседливый, всегда в движении. Увлекается компьютерными играми, но не забывает и о спорте.'
    },
    {
        id: 4,
        message: 'Маша – маленькая красавица, с длинными кудрявыми волосами. Любит петь, танцевать, рисовать.'
    }

]


export let posts: PostsType[] = [
    {id: 1, like: 10, message: 'Привет как дела'},
    {id: 2, like: 10, message: 'Мы будем сегодня кодить'}
]


ReactDOM.render(<App dialogsData={dialogsData}
                     messageData={messageData}
                     posts={posts}
/>, document.getElementById('root'));



