import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body'
import {userContext} from "./utils/userContext";
import {PropTypesInt} from "./utils/propTypes";

function App() {
    const [name, setName] = useState('Monsterid');
    const [avatar, setAvatar] = useState("https://www.gravatar.com/avatar/0?d=monsterid");
    const [showModal, setShowModal] = useState(false);

    const contextValue: PropTypesInt = {
        name: name,
        avatar: avatar,
        showModal: showModal,
        setShowModal: setShowModal,
        setAvatar: setAvatar,
        setName: setName
    };

    return (
        <div className="app">
            <userContext.Provider value={contextValue}>
                <Nav/>
                <Body/>
            </userContext.Provider>

        </div>
    );
}

export default App;
