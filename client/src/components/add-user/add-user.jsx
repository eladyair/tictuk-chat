import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { joinRoom } from '../../redux/chat/chat.actions';
// Styles
import './add-user.styles.scss';

// Components
import Popup from '../popup/popup';

const AddUser = ({ room, activeToggle, togglePopup, joinRoom }) => {
    const [userDetails, setUserDetails] = useState({ email: '', username: '' });

    const { email, username } = userDetails;

    const handleChnage = e => {
        const { name, value } = e.target;

        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const myRoomDetails = { ...userDetails, room };

        joinRoom(myRoomDetails);

        togglePopup();
    };

    return (
        <Popup active={activeToggle} togglePopup={togglePopup}>
            <div className='add-user-container'>
                <h1 className='add-user-title'>Room: {room}</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form__field'>
                        <label htmlFor='email'>Email: </label>
                        <input type='text' className='form__field__input' name='email' value={email} onChange={handleChnage} />
                    </div>
                    <div className='form__field'>
                        <label htmlFor='username'>User Name: </label>
                        <input type='text' className='form__field__input' name='username' value={username} onChange={handleChnage} />
                    </div>
                    <div className='form__field--cta'>
                        <button type='submit' className='form__field__btn'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </Popup>
    );
};

const mapDispatchToProps = dispatch => ({
    joinRoom: myRoomDetails => dispatch(joinRoom(myRoomDetails))
});

export default connect(null, mapDispatchToProps)(AddUser);
