const BaseSocket = require('../BaseSocket/index');
const CommentController = require('../../controllers/Comment/index');
const nameSpace = 'Comment';

class CommentEvents extends BaseSocket {
	constructor(socket) {
		super(CommentController, nameSpace, socket);
	}

	initiate() {
		super.initiateEvents();
	}
}

module.exports = CommentEvents;
