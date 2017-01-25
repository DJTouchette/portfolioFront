const mongoConfig = require('./mongo');
const expressConfig = require('./express.js');

module.exports = function addMiddleware(app) {
  expressConfig(app);
  mongoConfig();
}
