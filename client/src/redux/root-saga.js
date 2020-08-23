import { all, call } from 'redux-saga/effects';

// Sagas
import { chatSagas } from './sagas/chat.sagas';

export default function* rootSaga() {
    yield all([call(chatSagas)]);
}
