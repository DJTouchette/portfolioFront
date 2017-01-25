const PostEvents = require('./Post/index');
const CommentEvents = require('./Comment/index');
const UserEvents = require('./User/index');

const allEvents = [PostEvents, CommentEvents, UserEvents];

module.exports = function initiateEvents(socket) {
  for (let i = 0; i < allEvents.length; i ++) {
    new allEvents[i](socket).initiate();
  }
}
