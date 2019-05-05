const express = require('express');
const router = express.Router();
const db = require('../models'); 


router.get('/', (req, res) => {
    db.City.find( {} , (err, allCities) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(allCities)
    })
})


// get one city
router.get('/:id', (req, res) => {
    db.City.find({_id: req.params.id} , (err, allCities) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(allCities)
    })
})

// get post by city 
router.get('/:id/posts' , (req, res) => {
    db.Post.find({city: req.params.id}, (err, foundPost) => {
        if (err) return console.log(err)
        res.json(foundPost)
    })
})


module.exports = router