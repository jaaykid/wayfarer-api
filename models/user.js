const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const UserSchema = new Schema ({
    name: String, 
    username: String,
    signupDate: {
        type: Date,
        default: Date.now
    }
})



const User = mongoose.model('User', UserSchema);

module.exports = User; 