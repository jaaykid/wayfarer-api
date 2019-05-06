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
    preferredCity: {type: Schema.Types.ObjectId, ref: 'City'}
})


const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile; 