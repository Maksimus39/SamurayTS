import {DispatchType, SidebarPageType} from "../store";


let initialState = {
    friends: [
        {
            id: 1,
            img: "https://sun9-18.userapi.com/impf/c845522/v845522760/1bc497/CX5zJ848cAs.jpg?size=1280x1280&quality=96&sign=17719516ae85aabfd32c3dcd5bf47c38&type=album",
            name: "Natali"
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

export const sidebarPageReducer = (state: SidebarPageType = initialState, action: DispatchType) => {
    return state;
};

