const express = require('express');
const router = express.Router();
const db = require('../models'); 

//Get profile
router.get('/', (req, res) => {
    db.Profile.find( {} , (err, allProfiles) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(allProfiles); 
    })
})
// Get one profile 
router.get('/:id', (req, res) => {
    db.Profile.findById(req.params.id, (err, foundProfile) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(foundProfile);
    })
})

// Update profile 
router.put('/:id', (req, res) => {
   let profileId = req.params.id
   let updatedProfile = req.body
   db.Profile.findByIdAndUpdate(
       {_id: profileId},
       updatedProfile,
       {new: true},
       (err, newProfile) => {
           if (err) return console.log(err)
           res.json(newProfile)
       }
    )
}) 

// Get all post 
router.get('/:id/post', (req, res) => {
    db.Post.find({}, (err, allPost) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(allPost); 
    })
}) 


// // Create a post with this user
// router.put('/:id/post', (req, res) => {
//     let profileId = req.params.profile_id
//     db.Profile.findById(profileId, (err, foundProfile) => {
//         if (err) return console.log(err)
//         res.json(foundProfile); 
//     });
//     let newPost = new db.Post({
//         title: req.body.title,
//         comment: req.body.comment
//     })
//     db.Post.create(newPost, (err, updatedPost) => {
//         if(err) return res.status(400).json({message: "Sent post"})
//         res.json(updatedPost); 
//     })
    

// })

module.exports = router