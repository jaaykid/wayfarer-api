const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema; 

const ProfileSchema = new Schema ([{
    username: String,
    password: {type: String, required: true, select: false},
    profilePicture: String,
    signupDate: {
        type: Date,
        default: Date.now
    },
}])


const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile; 