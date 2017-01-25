const { Comment } = require('../../models/index');
const BaseController = require('../BaseController/index');

class CommentController extends BaseController {
	constructor() {
		super(Comment);
	}

}

module.exports = CommentController;
