import React, {useContext} from 'react';
import {userContext} from "../utils/userContext";

interface Props {
    size?: string
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void
}
const Avatar = ({size, onClick}:Props) => {
    const {name, avatar} = useContext(userContext);
    return (
        <img src={avatar} alt={name} className={`user-avatar ${size?? ""}`} onClick={onClick}/>
    );
};

export default Avatar;