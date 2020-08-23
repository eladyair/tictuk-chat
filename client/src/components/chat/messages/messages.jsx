import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectChatRoom, selectUser } from '../../../redux/chat/chat.selectors';

// Styles
import './messages.styles.scss';

// Components
import Message from '../message/message';

const Messages = ({ room, user, messages }) => {
    let welcomeMsg = '';
    if (room && user) {
        welcomeMsg = `Welcome ${user.name} to the room ${room}`;
    }

    return (
        <div className='messages'>
            {welcomeMsg ? <div>{welcomeMsg}</div> : ''}
            {messages.length > 0 &&
                messages.map((message, index) => {
                    return <Message key={index} user={user} message={message} />;
                })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    room: selectChatRoom,
    user: selectUser
});

export default connect(mapStateToProps)(Messages);
