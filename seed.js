const db = require('./models')


const newProfiles = [
    {
    username: "thing1",
    password: '123', 
    profilePicture: "link"
    },
    {
    username: "thing2",
    password: '1234', 
    profilePicture: "link"
    },
    {
    username: "thing3",
    password: '12345', 
    profilePicture: "link"
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
    image: "http://baycityguide.com/media/00P0B00000uwaF6UAI/Skyline-Downtown-Close-up-1500.jpg",
    description: "Come get some pizza",
    },
    {
    city: "Oakland",
    image: "http://baycityguide.com/media/00P0B00000uwaF6UAI/Skyline-Downtown-Close-up-1500.jpg",
    description: "Lots of culture",
    }
]

const newPosts = [
    {
    title: 'First time visiting',
    comment: 'it was so windy',
    },
    {
    title: 'OMG',
    comment: 'Bart was so packed',
    },
    {
    title: 'I almost died',
    comment: 'This homeless man yelled at me',
    },
    {
    title: "Don't come here if you want any sleep",
    comment: 'Music was always playing',
    },
    {
    title: 'Wow',
    comment: 'The pizza was as good as everyone says it is',
    },
]






db.Post.deleteMany( {}, (err, allPost) => {
    if (err) return console.log(err)
    console.log('deleted profiles'); 
    db.Post.create(newPosts, (err, allPost) => {
        if (err)return console.log(err)
        // console.log(allPost);
        db.City.create(newCities, (err, allCities) => {
            if (err) return console.log(err); 
            console.log(allCities)
            db.Profile.create(newProfiles, (err, savedProfile) =>{
                if (err) return  console.log(err)
                console.log('created user'); 
                for(let i = 0; i < allPost.length; i++) {
                    allPost.city = allCities[i]._id;
                    allPost.profile = savedProfile[i]._id;
                    console.log(allPost)
                    allPost[0].save((err, savedPost) => {
                        console.log(allPost)
                    })
                    process.exit()
                }
            })
        })
    })
})

