import {DialogsPageType, DispatchType, MessagesDataType} from "../state";


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

export const dialogsPageReducer = (state: DialogsPageType, action: DispatchType) => {

    switch (action.type) {
        case 'ADD-NEW-MESSAGE-TEXT':
            let newMessage: MessagesDataType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state;
        default:
            return state
    }
};

