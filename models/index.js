const mongoose = require('mongoose');

const DB_URL = 'mongodb://https://blogging-tings.herokuapp.com/'

mongoose.connect(DB_URL, {useNewUrlParser: true, useFindAndModify: false})
.then(() => console.log('mongodb is connected...'))
.catch((err) => console.log(err))


module.exports = {
    Profile: require('./profile'), 
    Post: require('./post'),
    City: require('./city')
}