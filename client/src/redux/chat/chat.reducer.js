import {
    JOIN_ROOM_SUCCESS,
    JOIN_ROOM_FAILURE,
    FETCH_ROOM_MESSAGES_SUCCESS,
    FETCH_ROOM_MESSAGES_FAILURE,
    CLEAR_CHAT_ROOM,
    CHANGE_ROOM
} from '../types';

const initialState = {
    user: null,
    rooms: [],
    currentRoom: null,
    roomMessages: [],
    isRoomChange: false,
    error: null
};

const chatReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case JOIN_ROOM_SUCCESS:
            const { email, name, room } = payload;
            const user = { email, name };

            return {
                ...state,
                user,
                rooms: [...state.rooms, room],
                currentRoom: room
            };
        case FETCH_ROOM_MESSAGES_SUCCESS:
            return {
                ...state,
                roomMessages: [...payload]
            };
        case CLEAR_CHAT_ROOM:
            return {
                ...state,
                currentRoom: null,
                roomMessages: [],
                isRoomChange: true
            };
        case CHANGE_ROOM:
            return {
                ...state,
                currentRoom: payload,
                isRoomChange: false
            };
        case JOIN_ROOM_FAILURE:
        case FETCH_ROOM_MESSAGES_FAILURE:
            return {
                ...state,
                user: null,
                currentRoom: null,
                roomMessages: []
            };
        default:
            return state;
    }
};

export default chatReducer;
