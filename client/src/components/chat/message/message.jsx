import React from 'react';

export default function Message({ user, message }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: user.email === message.id ? 'flex-end' : 'flex-start',
                alignItems: 'center',
                paddingBottom: '1em'
            }}
        >
            {user.email !== message.id && (
                <div
                    style={{
                        height: 34,
                        width: 34,
                        marginRight: '0.5em',
                        border: '2px solid #e5e6ea',
                        borderRadius: 25,
                        textAlign: 'center',
                        fontSize: '16px',
                        paddingTop: 0
                    }}
                >
                    {message.name.slice(0, 2).toUpperCase()}
                </div>
            )}
            <div
                style={{
                    background: user.email === message.id ? '#58bf56' : '#e5e6ea',
                    color: user.email === message.id ? 'white' : 'black',
                    padding: '0.6rem',
                    borderRadius: '1rem',
                    maxWidth: '60%'
                }}
            >
                {message.message}
            </div>
        </div>
    );
}
