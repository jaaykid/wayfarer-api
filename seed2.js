const db = require('./models')

const newPosts = [
    {
    title: 'first time visiting',
    comment: 'it was so windy',
    city: 'San Francisco',
    profile: 'thing1' 
    },
    {
    title: 'OMG',
    comment: 'it was so windy',
    city: 'San Francisco',
    profile: 'thing2' 
    },
    {
    title: '3 reasons why I will never ride bart again',
    comment: 'number one... NO ONE BELIEVES IN DEODORANT ',
    city: 'San Francisco',
    profile: 'thing3' 
    },
    {
    title: 'Amazing',
    comment: 'The pizza here was delicious',
    city: 'Chicago',
    profile: 'thing4' 
    },
    {
    title: 'first time visiting',
    comment: 'Can a man still be brave if he’s afraid? That is the only time a man can be brave.Pay the iron price. The Dothraki do things in their own time, for their own reasons. House Tarly of Horn Hill Winter is coming.',
    city: 'Chicago',
    profile: 'thing5' 
    },
    {
    title: 'The battle of the redgrass field.',
    comment: 'A Lannister always pays his debts. May the Father judge him justly. When you play the game of thrones, you win or you die. More pigeon pie, please.',
    city: 'New York',
    profile: 'thing6' 
    },
    {
    title: 'I am getting tired of writing these things',
    comment: 'Coding is fun',
    city: 'Oakland',
    profile: 'thing7' 
    },
    {
    title: 'The moment when you spend two days on a problem',
    comment: 'Then you realize what you did wrong and rewrite the entire thing in an hour... haha',
    city: 'Oakland',
    profile: 'thing8' 
    },
    {
    title: 'first time visiting',
    comment: 'it was so windy',
    city: 'New York',
    profile: 'thing9' 
    },
    {
    title: 'first time visiting',
    comment: 'it was so windy',
    city: 'Oakland',
    profile: 'thing10' 
    },
]


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
