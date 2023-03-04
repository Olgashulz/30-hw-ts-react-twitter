import React, {useContext, useState} from 'react';
import Avatar from "./Avatar";
import {userContext} from "../utils/userContext";
import Modal from "./Modal";

const UserStats = () => {
    const [followers, setFollowers] = useState(10);
    const [following, setFollowing] = useState(5);
    const [clickType, setClickType] = useState("");

    const handleRightClick = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        const state = event.currentTarget.dataset.type;
        console.log(state);
        switch (state) {
            case 'followers':
                setFollowers(prevState => prevState > 0 ? prevState - 1 : prevState);
                break;
            case 'following':
                setFollowing(prevState => prevState > 0 ? prevState - 1 : prevState);
                break;
            default:
                break;
        }
    };

    const handleLeftClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.dataset.type === "followers" ?
            setFollowers(prevState => prevState + 1) : setFollowing(prevState => prevState + 1);
    };

    const handleClickAvatar = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        if(event.target === event.currentTarget){
            setShowModal(true);
            event.button === 0 ? setClickType("avatar") : setClickType("name");
        }
    };

    const {name, setShowModal, showModal} = useContext(userContext);
    return (
        <div className="user-stats">
            <div onContextMenu={handleClickAvatar}>
                <Avatar onClick={handleClickAvatar}/>
                {name}
            </div>
            <div className="stats">
                <div data-type="followers" onContextMenu={handleRightClick} onClick={handleLeftClick}>
                    Followers {followers}
                </div>
                <div data-type="following" onContextMenu={handleRightClick} onClick={handleLeftClick}>
                    Following {following}
                </div>
            </div>

            {showModal && (
                <Modal value={clickType}>
                    <h1>Hello</h1>
                </Modal>
            )}
        </div>
    );
};

export default UserStats;
