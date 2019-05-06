const express = require('express');
const router = express.Router();
const db = require('../models'); 


router.get('/', (req, res) => {
    db.Post.find( {} , (err, allPosts) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(allPosts)
    })
})

// Get post by ID
router.get('/:id', (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(foundPost)
    })
}) 

//Get post by city
router.get('/:id/cities', (req, res) => {
    db.Post.find({city: req.params.id}, (err, foundPost) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(foundPost)
    })
})

// get post by user
router.get('/:id/users', (req, res) => {
    db.Post.find({profile: req.params.id}, (err, foundPost) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(foundPost)
    })
})

// create new post
router.post('/', (req, res) => {
        let newPost = new db.Post({
            title : req.body.title,
            comment : req.body.comment,
        }) 
        db.Post.create(newPost, (err, savedPost) => {
            if (err) return console.log(err);
            res.json(savedPost)
        })  
})



module.exports = router