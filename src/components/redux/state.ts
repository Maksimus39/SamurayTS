// типы данных
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarPageType
}
export type ProfilePageType = {
    dialogs: DialogDataType[]
    messages: MessagesDataType[]
}
export type MessagesPageType = {
    posts: PostDataType[]
}
export type SidebarPageType = {
    friends: FriendsDataType[]
}
export type DialogDataType = {
    img: string
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type FriendsDataType = {
    id: number
    img: string
    name: string
}


// state data
export const state: RootStateType = {
    profilePage: {
        dialogs: [
            {
                img: "https://sun9-13.userapi.com/s/v1/ig2/MeVyG5WMz1Ky9FWdgpj-hQc5q1syyjv1hn4BQkEXdHi5SnGN38pALwII-QduTQ7A2APe6sEuvdBR6bdFirNnhslM.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x640,480x854,540x960,640x1138,720x1281,750x1334&from=bu&u=lzxi6OgRcIRZqJXTydaWG4w2OgmjUJkYUJpvehh8MSg&cs=320x569",
                id: "1",
                name: 'Macsim'
            },
            {
                img: "https://sun9-22.userapi.com/s/v1/ig2/C1GrOKpgijkFxFSTbydeyLmEQ7G9xPGD46J6rKO1bF9r4gaLhDG-Zr5iVCw4k983LGc2auJUdqC3fgKYeGTk0UD2.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=8ahwgp87450YH3ds8sQ1puXB56bquOUjerfUOGdKCIY&cs=320x427",
                id: "2",
                name: 'Larisa'
            },
            {
                img: "https://sun9-54.userapi.com/s/v1/ig2/4T7GmcA-qT8Dgf1u_RH_mO31UvlCLXx770-Lpg-4tKGq5UGF3GI4is5iRyyH2Qz897Ck7rMAcSiHeyreHUAGHk2i.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=3l4onkzm_3pZcKPu1lH23Ie5Lh9CwzlR5DfgqDCFx60&cs=510x340",
                id:
                    "3",
                name: 'Andrey'
            },
            {
                img: "https://sun9-41.userapi.com/s/v1/ig2/5gvjtfmowukX37G3ODBSpngtMKwD0UTrnA0rdT0SF5xRsE8GTpN0RWVDKFKgRnzxA53wJ19mI7bmOZbtD37WHvZH.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2560x2560&from=bu&u=AXKZhLUUjYM4acnur8tfxPhthyziAiBLKge4MhbFV9I&cs=320x320",
                id: "4",
                name: 'Bogdan'
            },
        ],
        messages: [
            {id: "1", message: 'Привет, как твои дела?'},
            {id: "2", message: 'Привет, ты будешь ужинать!'},
            {id: "3", message: 'Мам, можно я пойду погуляю с друзьями?'},
            {id: "4", message: 'Пап, помоги мне с домашним заданием по математике.'},
        ],
    },
    messagesPage: {
        posts: [
            {id: 1, message: 'Hi how are you', likesCount: 15},
            {id: 2, message: 'it`s my first post', likesCount: 20},
        ]
    },
    sidebar: {
        friends: [
            {
                id: 1,
                img: "https://sun1-86.userapi.com/impf/0YLRJxZct6LI-KM2eb_bhfXuttxrdsEMgu66JQ/05T7suIhTZ4.jpg?size=273x282&quality=96&sign=ef0db73ec19d4c13a9dded0864b3bed6&type=album",
                name: "Serega"
            },
            {
                id: 2,
                img: "https://sun9-69.userapi.com/impf/c847219/v847219248/447e5/1I9IKd_uz_Y.jpg?size=664x851&quality=96&sign=9b6c5d9da7e861ed33beec0bac80c4dc&type=album",
                name: "Alex"
            },
            {
                id: 3,
                img: "https://sun9-13.userapi.com/impg/nRdk1QsQu8IYbUJN_OEHIw_tDKZRDEvm-CoLrg/Yf6-LkRgrtI.jpg?size=1200x1600&quality=95&sign=8e8c23ed8169a6e1da32aeadebdd25d4&type=album",
                name: "Evgeniy"
            },
        ]
    }
}