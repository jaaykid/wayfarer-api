const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema ({
    title: String,
    comment: String,
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'},
    city:{type: Schema.Types.ObjectId, ref: 'City'}
})
    

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;