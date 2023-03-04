import React, {useContext, useState} from 'react';
import {userContext} from "../utils/userContext";

interface Props {
    value: string
    children: React.ReactNode
}

const Modal = ({value}: Props) => {
    const {setShowModal, setAvatar, setName} = useContext(userContext);
    const [inputValue, setInputValue] = useState("");

    const handleCloseModal = () => {
        setShowModal(false);
    }
    const changeStats = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (inputValue.length > 0) {
            setShowModal(false);
            value ==="avatar" ? setAvatar(inputValue) :setName(inputValue)
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="btn_close" onClick={handleCloseModal}>X</button>
                <input
                    onChange={e => setInputValue(e.target.value)}
                    type='text'
                    placeholder={`New ${value}`}
                />
                <button className="button" onClick={changeStats}>Change</button>
            </div>
        </div>
    );
}


export default Modal;