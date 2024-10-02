// global.d.ts
import { compose } from "redux";

export interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

declare global {
    interface Window {
        myGlobalVar: string;
    }
}

window.myGlobalVar = "Hello, TypeScript!";