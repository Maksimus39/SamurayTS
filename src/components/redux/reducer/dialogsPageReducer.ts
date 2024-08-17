import {DialogsPageType, DispatchType, MessagesDataType} from "../store";

export type AddNewMessageTextActionType = {
    type: 'ADD-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}

export const addNewMessageTextActionCreator = (newMessageText: string): AddNewMessageTextActionType => {
    return {
        type: 'ADD-NEW-MESSAGE-TEXT',
        newMessageText: newMessageText
    } as const
}
export const updateNewMessageTextActionCreator = (newMessage: string): UpdateNewMessageTextActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    } as const
}

let initialState: DialogsPageType = {
    dialogs: [
        {
            img: "https://sun9-13.userapi.com/s/v1/ig2/MeVyG5WMz1Ky9FWdgpj-hQc5q1syyjv1hn4BQkEXdHi5SnGN38pALwII-QduTQ7A2APe6sEuvdBR6bdFirNnhslM.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x640,480x854,540x960,640x1138,720x1281,750x1334&from=bu&u=lzxi6OgRcIRZqJXTydaWG4w2OgmjUJkYUJpvehh8MSg&cs=320x569",
            id: new Date().getTime(),
            name: 'Macsim'
        },
        {
            img: "https://sun9-22.userapi.com/s/v1/ig2/C1GrOKpgijkFxFSTbydeyLmEQ7G9xPGD46J6rKO1bF9r4gaLhDG-Zr5iVCw4k983LGc2auJUdqC3fgKYeGTk0UD2.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=8ahwgp87450YH3ds8sQ1puXB56bquOUjerfUOGdKCIY&cs=320x427",
            id: new Date().getTime(),
            name: 'Larisa'
        },
        {
            img: "https://sun9-54.userapi.com/s/v1/ig2/4T7GmcA-qT8Dgf1u_RH_mO31UvlCLXx770-Lpg-4tKGq5UGF3GI4is5iRyyH2Qz897Ck7rMAcSiHeyreHUAGHk2i.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=3l4onkzm_3pZcKPu1lH23Ie5Lh9CwzlR5DfgqDCFx60&cs=510x340",
            id: new Date().getTime(),
            name: 'Andrey'
        },
        {
            img: "https://sun9-41.userapi.com/s/v1/ig2/5gvjtfmowukX37G3ODBSpngtMKwD0UTrnA0rdT0SF5xRsE8GTpN0RWVDKFKgRnzxA53wJ19mI7bmOZbtD37WHvZH.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2560x2560&from=bu&u=AXKZhLUUjYM4acnur8tfxPhthyziAiBLKge4MhbFV9I&cs=320x320",
            id: new Date().getTime(),
            name: 'Bogdan'
        },
    ],
    messages: [
        {id: new Date().getTime(), message: 'Привет, как твои дела?'},
        {id: new Date().getTime(), message: 'Привет, ты будешь ужинать!'},
        {id: new Date().getTime(), message: 'Мам, можно я пойду погуляю с друзьями?'},
        {id: new Date().getTime(), message: 'Пап, помоги мне с домашним заданием по математике.'},
    ],
    newMessageText: ''
}

export const dialogsPageReducer = (state: DialogsPageType = initialState, action: DispatchType) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE-TEXT':
            let newMessage: MessagesDataType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }
};