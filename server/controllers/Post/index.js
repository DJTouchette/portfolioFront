const { Post } = require('../../models/index');
const BaseController = require('../BaseController/index');

class PostController extends BaseController {
	constructor() {
		super(Post);
	}

}

module.exports = PostController;
