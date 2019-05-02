const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema ({
    title: String,
    comment: String,
    location: String
})


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;