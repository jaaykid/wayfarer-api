const db = require('./models')


handleError = (err) => {
 console.log(err)
}

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


const newProfiles = [
    {
    username: "thing1",
    password: '123', 
    profilePicture: "https://i.guim.co.uk/img/media/acb1627786c251362c4bc87c1f53fa39b49d8d3d/274_0_821_1026/master/821.jpg?width=700&quality=85&auto=format&fit=max&s=c15b1226144de3c52be32fe46f81f52d",
    },
    {
    username: "thing2",
    password: '123', 
    profilePicture: "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg",
    },
    {
    username: "thing3",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
    {
    username: "thing4",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
    {
    username: "thing5",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
    {
    username: "thing6",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
    {
    username: "thing7",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
    {
    username: "thing8",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
    {
    username: "thing9",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
    {
    username: "thing10",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
    {
    username: "thing1",
    password: '123', 
    profilePicture: "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png",
    },
]



const newCities = [
    {
    city: "San Francisco",
    image: "http://baycityguide.com/media/00P0B00000uwaF6UAI/Skyline-Downtown-Close-up-1500.jpg",
    description: "The tech mecca",
    },
    {
    city: "Chicago",
    image: "https://www.overseasattractions.com/wp-content/uploads/2017/08/chicago-at-night.jpg",
    description: "Come get some pizza",
    cityId: 'CHI'
    },
    {
    city: "Oakland",
    image: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_80,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/oakland/Hotels-Meeting-Spaces---Meeting-Event-Spaces---Oracle-Arena---HR14010_oracle-overview.jpg-2--3a0275935056a36_3a0276e6-5056-a36f-2321941c418c3633.jpg",
    description: "Lots of culture",
    cityId: 'OAK'
    },
    {
    city: "New York",
    image: "https://s.hdnux.com/photos/51/44/10/10895907/3/920x920.jpg",
    description: "The city that never sleeps",
    cityId: 'NY'
    },
]


db.Profile.deleteMany({}, (err, deletedProfiles) => {
    if (err) handleError
    db.Profile.create(newProfiles, (err, allProfiles) => {
        if (err) handleError
        db.City.deleteMany({}, (err, deletedCities) => {
            if (err) handleError
            db.City.create(newCities, (err, allCities) => {
                if (err) handleError
                db.Post.deleteMany({}, (err, deleted) => {
                    if (err) console.log(err)
                    console.log('deleted all posts')
                })
                newPosts.forEach(postData => {
                    const newPost = new db.Post({
                        title: postData.title,
                        comment: postData.comment
                    })
                    db.Profile.findOne({username: postData.profile}, (err, foundProfile) => {
                        if (err) handleError
                        newPost.profile = foundProfile
                        newPost.save((err, savedPost) => {
                            if (err) handleError
                        })
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
    })
})

