import axios from 'axios';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { JOIN_ROOM_START, SAVE_MESSAGE_START, FETCH_ROOM_MESSAGES } from '../types';
import {
    joinRoomSuccess,
    joinRoomFailure,
    saveMessageSuccess,
    saveMessageFailure,
    fetchRoomMessagesSuccess,
    fetchRoomMessagesFailure
} from '../chat/chat.actions';

export function* onJoinStart() {
    yield takeLatest(JOIN_ROOM_START, onJoinAsync);
}

export function* onJoinAsync({ payload: { email, username: name, room } }) {
    const roomDetails = { email, name, room };
    const body = JSON.stringify(roomDetails);

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        yield axios.post('/api/chat/join', body, config);

        yield put(joinRoomSuccess(roomDetails));
    } catch (error) {
        yield put(joinRoomFailure(error));
    }
}

export function* onSaveMessageStart() {
    yield takeLatest(SAVE_MESSAGE_START, onSaveMessageAsync);
}

export function* onSaveMessageAsync({ payload: { user, room, message } }) {
    const messageDetails = { user, room, message };

    const body = JSON.stringify(messageDetails);

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = yield axios.post('/api/chat/message', body, config);

        yield put(saveMessageSuccess(res.data));
    } catch (error) {
        yield put(saveMessageFailure(error));
    }
}

export function* onFetchRoomMessagesStart() {
    yield takeLatest(FETCH_ROOM_MESSAGES, onFetchRoomMessagesAsync);
}

export function* onFetchRoomMessagesAsync({ payload }) {
    try {
        const res = yield axios.get(`/api/chat/${payload}`);
        yield put(fetchRoomMessagesSuccess(res.data));
    } catch (error) {
        yield put(fetchRoomMessagesFailure(error));
    }
}

export function* chatSagas() {
    yield all([call(onJoinStart), call(onSaveMessageStart), call(onFetchRoomMessagesStart)]);
}
