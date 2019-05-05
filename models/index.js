const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/wayfarer'

mongoose.connect(process.env.MONGODB_URI || DB_URL , {useNewUrlParser: true, useFindAndModify: false})
.then(() => console.log('mongodb is connected...'))
.catch((err) => console.log(err))


module.exports = {
    Profile: require('./profile'), 
    Post: require('./post'),
    City: require('./city')
}