import {ContactsType} from "../Profile";
import React from "react";


export const Contacts = ({contacts}: { contacts: ContactsType }) => (
    <div>
        <h3>Мои контакты!</h3>
        {Object.entries(contacts).map(([key, value]) => (
            value ? <div key={key}>{key}: {value}</div> : null
        ))}
    </div>
);