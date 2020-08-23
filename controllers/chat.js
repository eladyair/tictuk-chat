const users = [];

const messages = [];

exports.postJoinRoom = async (req, res) => {
    try {
        // Setting the values from the request body
        const { email, name, room } = req.body;

        let user = users.find(user => user.id === email);

        if (!user) {
            user = { id: email, name, room };

            users.push(user);
        }

        console.log('Users: ', users);

        return res.json(user);
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

exports.postMessage = async (req, res) => {
    try {
        // Setting the values from the request body
        const { user, room, message } = req.body;

        const newMessage = { id: user.email, room, name: user.name, message };

        messages.push(newMessage);

        console.log('Messages: ', messages);

        return res.json(newMessage);
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

exports.getRoomMessages = async (req, res) => {
    try {
        let room = req.params.room;
        let roomMessages;

        roomMessages = messages.filter(msg => msg.room === room);

        // Returning the broker authentication
        return res.json(roomMessages);
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
};
