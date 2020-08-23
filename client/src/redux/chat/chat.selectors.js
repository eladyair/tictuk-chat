import { createSelector } from 'reselect';

const selectChat = state => state.chat;

export const selectChatRoom = createSelector([selectChat], chat => chat.currentRoom);

export const selectUser = createSelector([selectChat], chat => chat.user);

export const selectRoomMessages = createSelector([selectChat], chat => chat.roomMessages);

export const selectIsRoomChange = createSelector([selectChat], chat => chat.isRoomChange);

export const selectUserRooms = createSelector([selectChat], chat => chat.rooms);
