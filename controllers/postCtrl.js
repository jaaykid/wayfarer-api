const express = require('express');
const router = express.Router();
const db = require('../models'); 


router.get('/', (req, res) => {
    db.Post.find( {} , (err, allPosts) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json({status:200,message:'success', Data:[allPosts]})
    })
})

router.get('/:id', (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json({status:200,message:'success', Data:[foundPost]})
    })
} )


module.exports = router