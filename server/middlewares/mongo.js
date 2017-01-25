const mongoose = require('mongoose');

module.exports = function mongooseConfig() {
  mongoose.connect(process.env.MONGO_URI);
}
