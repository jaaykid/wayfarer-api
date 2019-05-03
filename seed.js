const db = require('./models')







db.Profile.create(newprofile, (err, savedProfile) => {
    if(err) {return console.log(err)}
    console.log(savedProfile)
})