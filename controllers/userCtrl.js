const express = require('express');
const router = express.Router();
const db = require('../models'); 


router.get('/', (req, res) => {
    db.User.find( {} , (err, allUsers) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json({status:200,message:'success', Data:[allUsers]})
    })
})

router.get('/:id', (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json({status:200,message:'success', Data:[foundUser]})
    })
} )


module.exports = router