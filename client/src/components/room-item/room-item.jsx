import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearChatRoom, changeRoom } from '../../redux/chat/chat.actions';
import { selectChatRoom, selectUserRooms } from '../../redux/chat/chat.selectors';

// Styles
import './room-item.styles.scss';

const RoomItem = ({ room: { name, description }, handleSelect, handlePopup, currentRoom, clearChatRoom, userRooms, changeRoom }) => {
    const handleClick = () => {
        clearChatRoom();

        if (userRooms.indexOf(name) >= 0) {
            changeRoom(name);
        } else if (name !== currentRoom) {
            handleSelect(name);
            handlePopup(name);
        }
    };

    return (
        <div className={`room ${name === currentRoom ? 'selected' : ''}`} onClick={handleClick}>
            <h5 className={`room__title ${name === currentRoom ? 'room__title--selected' : ''}`}>{name}</h5>
            <div className='room__description'>{description}</div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentRoom: selectChatRoom,
    userRooms: selectUserRooms
});

const mapDispatchToProps = dispatch => ({
    clearChatRoom: () => dispatch(clearChatRoom()),
    changeRoom: room => dispatch(changeRoom(room))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomItem);
