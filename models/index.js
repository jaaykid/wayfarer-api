const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/wayfarer'
const MONGOLAB_CRIMSON_URI = 'mongodb://heroku_kmf2q9jc:r0p6kd6ebl12vegpa7vj3jc55f@ds229609.mlab.com:29609/heroku_kmf2q9jc'

mongoose.connect(process.env.MONGOLAB_CRIMSON_URI || DB_URL, {useNewUrlParser: true, useFindAndModify: false})
.then(() => console.log('mongodb is connected...'))
.catch((err) => console.log(err))


module.exports = {
    Profile: require('./profile'), 
    Post: require('./post'),
    City: require('./city')
}