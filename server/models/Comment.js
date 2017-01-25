const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Anonymous'
  },
  belongsTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
  }
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
