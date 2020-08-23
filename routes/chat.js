const router = require('express').Router();

// Controllers
const chatController = require('../controllers/chat');

// @route   POST api/chat
// @desc    Adding a user to a room
router.post('/join', chatController.postJoinRoom);

// @route   POST api/chat/message
// @desc    Saving a room message
router.post('/message', chatController.postMessage);

// @route   GET api/chat/room
// @desc    Getting all messages by room
router.get('/:room', chatController.getRoomMessages);

module.exports = router;
