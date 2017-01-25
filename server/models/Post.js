const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  belongsTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  heroImg: {
    type: String,
  },
  published: {
    type: Boolean,
    default: false,
  }
});


const Post = mongoose.model('post', postSchema);

module.exports = Post;
