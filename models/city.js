const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    city: String,
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})


const City = mongoose.model('City', CitySchema);

module.exports = City