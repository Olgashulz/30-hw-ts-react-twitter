import React from "react";
import {PropTypesInt} from "./propTypes";


export const userContext = React.createContext<PropTypesInt>({
    name: "Monster",
    avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
    showModal: false,
    setShowModal: bool => true,
    setAvatar: string => "https://www.gravatar.com/avatar/0?d=monsterid",
    setName: string => "Monster",
});