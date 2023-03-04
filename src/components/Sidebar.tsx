import React, {useContext} from 'react';
import UserStats from "./UserStats";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <UserStats/>
        </div>
    );
};

export default Sidebar;