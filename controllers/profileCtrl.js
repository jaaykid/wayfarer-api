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


// get post by user
router.get('/:id/posts', (req, res) => {
    db.Post.find({profile: req.params.id}, (err, foundPost) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(foundPost)
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

module.exports = router