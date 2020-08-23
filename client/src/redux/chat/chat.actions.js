import {
    JOIN_ROOM_START,
    JOIN_ROOM_SUCCESS,
    JOIN_ROOM_FAILURE,
    SAVE_MESSAGE_START,
    SAVE_MESSAGE_SUCCESS,
    SAVE_MESSAGE_FAILURE,
    FETCH_ROOM_MESSAGES,
    FETCH_ROOM_MESSAGES_SUCCESS,
    FETCH_ROOM_MESSAGES_FAILURE,
    CLEAR_CHAT_ROOM,
    CHANGE_ROOM
} from '../types';

export const joinRoom = myRoomDetails => ({
    type: JOIN_ROOM_START,
    payload: myRoomDetails
});

export const joinRoomSuccess = myRoomDetails => ({
    type: JOIN_ROOM_SUCCESS,
    payload: myRoomDetails
});

export const joinRoomFailure = error => ({
    type: JOIN_ROOM_FAILURE,
    payload: error
});

export const saveMessage = messageDetails => ({
    type: SAVE_MESSAGE_START,
    payload: messageDetails
});

export const saveMessageSuccess = myMassage => ({
    type: SAVE_MESSAGE_SUCCESS,
    payload: myMassage
});

export const saveMessageFailure = error => ({
    type: SAVE_MESSAGE_FAILURE,
    payload: error
});

export const fetchRoomMessagesStart = room => ({
    type: FETCH_ROOM_MESSAGES,
    payload: room
});

export const fetchRoomMessagesSuccess = massages => ({
    type: FETCH_ROOM_MESSAGES_SUCCESS,
    payload: massages
});

export const fetchRoomMessagesFailure = error => ({
    type: FETCH_ROOM_MESSAGES_FAILURE,
    payload: error
});

export const clearChatRoom = () => ({
    type: CLEAR_CHAT_ROOM
});

export const changeRoom = room => ({
    type: CHANGE_ROOM,
    payload: room
});
