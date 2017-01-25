const BaseSocket = require('../BaseSocket/index');
const UserController = require('../../controllers/User/index');
const nameSpace = 'User';

class UserEvents extends BaseSocket {
	constructor(socket) {
		super(UserController, nameSpace, socket);
	}

	initiate() {
		super.initiateEvents();
	}
}

module.exports = UserEvents;
