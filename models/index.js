const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/wayfarer'

mongoose.connect(DB_URL, {useNewUrlParser: true, useFindAndModify: false})
.then(() => console.log('mongodb is connected...'))
.catch((err) => console.log(err))


module.exports = {
    User: require('./user'), 
    Post: require('./post'),
    City: require('./city')
}