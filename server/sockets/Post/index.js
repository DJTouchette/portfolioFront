const BaseSocket = require('../BaseSocket/index');
const PostController = require('../../controllers/Post/index');
const nameSpace = 'Post';

class PostEvents extends BaseSocket {
	constructor(socket) {
		super(PostController, nameSpace, socket);
	}

	initiate() {
		super.initiateEvents();
	}
}

module.exports = PostEvents;
