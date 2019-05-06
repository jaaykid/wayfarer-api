const db = require('./models')




newPosts.forEach(postData => {
    const newPost = new db.Post({
        title: postData.title,
        comment: postData.comment,
    })
    db.Profile.find({}, (err, allPosts) => {
        if (err) handleError
        db.Profile.findOne({username: postData.profile}, (err, foundProfile) => {
            // console.log(foundProfile)
                if (err) handleError
                newPost.profile = foundProfile
                newPost.save((err, savedPost) => {
                    if (err) handleError
                    // console.log(savedPost)
             })
             db.City.findOne({city: postData.city}, (err, foundCity) => {
                 if (err) handleError
                 newPost.city = foundCity
                 newPost.save((err, savedPost) => {
                     if (err) handleError
                 })
             })
        })
    })
})
