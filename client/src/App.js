import React from 'react';
import './App.css';

// Components
import RoomsList from './components/rooms-list/rooms-list';
import Chat from './components/chat/chat';

function App() {
    return (
        <div className='app-conatiner'>
            <RoomsList />
            <Chat />
        </div>
    );
}

export default App;
