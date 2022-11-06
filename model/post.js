const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postName: {type: String, require: true},
  postTopic: {type: String, require: true},
  postTime: {type: Date, default: Date.now},
  postMessage: {type: String, require: true},
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
