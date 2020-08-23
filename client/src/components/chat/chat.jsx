import React, { useState, useRef, useEffect, useMemo } from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { saveMessage, fetchRoomMessagesStart } from '../../redux/chat/chat.actions';
import { selectChatRoom, selectUser, selectRoomMessages, selectIsRoomChange } from '../../redux/chat/chat.selectors';

// Styles
import './chat.styles.scss';

// Components
import Messages from './messages/messages';

const Chat = ({ room, user, saveMessage, fetchRoomMessages, roomMessages, isRoomChange }) => {
    let messagesIntervalRef = useRef(null);

    const [messages, setMessages] = useState(roomMessages);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (room) {
            messagesIntervalRef.current = setInterval(async () => {
                fetchRoomMessages(room);
            }, 1000);

            console.log('Interval In IF: ', messagesIntervalRef.current);
        }

        console.log('Interval: ', messagesIntervalRef.current);

        return () => {
            clearInterval(messagesIntervalRef.current);
        };
    }, [room, fetchRoomMessages]);

    useEffect(() => {
        if (isRoomChange) {
            clearInterval(messagesIntervalRef.current);
        }
    }, [isRoomChange]);

    useMemo(() => {
        setMessages([...roomMessages]);
    }, [roomMessages]);

    const handleChange = e => {
        const { value } = e.target;
        setMessage(value);
    };

    const handleKeyUp = e => {
        if (e.keyCode === 13) {
            onSend(message);
        }
    };

    const handleClick = () => {
        onSend(message);
    };

    const onSend = message => {
        saveMessage({ user, room, message });
        setMessage('');
    };

    return (
        <div className='chat-container'>
            <Messages messages={messages} />
            <div className='message-cta'>
                <input
                    type='text'
                    className='message-cta__input'
                    placeholder='Type a message'
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    value={message}
                />
                <button className='message-cta__btn' onClick={handleClick}>
                    Send
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    room: selectChatRoom,
    user: selectUser,
    roomMessages: selectRoomMessages,
    isRoomChange: selectIsRoomChange
});

const mapDispatchToProps = dispatch => ({
    saveMessage: messageetails => dispatch(saveMessage(messageetails)),
    fetchRoomMessages: room => dispatch(fetchRoomMessagesStart(room))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
