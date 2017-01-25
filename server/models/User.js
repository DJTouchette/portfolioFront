const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	admin: {
		type: Boolean,
		default: false,
	}

});

function hashPassword(next) {
	const ctx = this;
	bcrypt.hash(ctx.password, saltRounds, function(err, hash) {
  	if (err) {
  		const initErr = new Error(err);
  		next(initErr);
  	}
  	ctx.password = hash;

  	next();
	});
}

userSchema.pre('save', hashPassword);

const User = mongoose.model('user', userSchema);

module.exports = User;
