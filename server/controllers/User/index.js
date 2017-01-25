const { User } = require('../../models/index');
const BaseController = require('../BaseController/index');

class UserController extends BaseController {
	constructor() {
		super(User);
	}

}

module.exports = UserController;
