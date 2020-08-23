import React, { useState, Fragment } from 'react';

// Css transition
import { Transition } from 'react-transition-group';

// Styles
import './rooms-list.styles.scss';

// Components
import RoomItem from '../room-item/room-item';
import AddUser from '../add-user/add-user';

export default function RoomsList() {
    const [rooms, setRooms] = useState([
        { name: 'Talk Shop', description: 'Hi' },
        { name: 'Talk to me', description: 'Pick a subject' }
    ]);
    const [selectedRoom, setSelectedRoom] = useState('');

    const [togglePopup, setTogglePopup] = useState(false);

    const handleTogglePopup = () => {
        setTogglePopup(!togglePopup);
    };

    return (
        <div className='rooms-container'>
            <h2 className='rooms-title'>Rooms</h2>
            <div className='rooms'>
                {rooms.map((room, index) => (
                    <RoomItem key={index} room={room} handleSelect={room => setSelectedRoom(room)} handlePopup={handleTogglePopup} />
                ))}
            </div>
            <Fragment>
                <Transition in={togglePopup} timeout={150} mountOnEnter unmountOnExit>
                    {state => (
                        <AddUser
                            togglePopup={handleTogglePopup}
                            room={selectedRoom}
                            activeToggle={state === 'exiting' || state === 'entering' ? false : true}
                        />
                    )}
                </Transition>
            </Fragment>
        </div>
    );
}
