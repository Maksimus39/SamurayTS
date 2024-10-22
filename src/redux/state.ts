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

export type  ProfilePageType = {
    dialogsData: DialogsDataType[],
    messageData: MessageDataType[]
}
export type DialogPageType = {
    posts: PostsType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

export const state: RootStateType = {
    profilePage: {
        dialogsData: [
            {id: 1, name: 'Иван Иванович:'},
            {id: 2, name: 'Анна Петровна:'},
            {id: 3, name: 'Andrey:'},
            {id: 4, name: 'Маша:'}
        ],
        messageData: [
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

        ],
    },

    dialogPage: {
        posts: [
            {id: 1, like: 10, message: 'Привет как дела'},
            {id: 2, like: 10, message: 'Мы будем сегодня кодить'}
        ]
    }
}