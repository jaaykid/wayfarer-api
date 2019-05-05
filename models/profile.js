const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ProfileSchema = new Schema ({ 
    username: String,
    password: {type: String, required: true},
    profilePicture: String,
    signupDate: {
        type: Date,
        default: Date.now
    },
})


const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile; 