import React from 'react';

// Styles
import './popup.styles.scss';

const Popup = ({ active, togglePopup, children }) => {
    const activePopup = active ? 'open' : `close`;

    return (
        <div className={`popup-container ${activePopup}`}>
            <div className='overlay' onClick={togglePopup}></div>

            <div className='popup'>
                <div className='popup__close-btn' onClick={togglePopup}>
                    &times;
                </div>
                {children}
            </div>
        </div>
    );
};

export default Popup;
