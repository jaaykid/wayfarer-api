const express = require('express');
const router = express.Router();
const db = require('../models'); 


router.get('/', (req, res) => {
    db.User.find( {} , (err, allCities) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json({status:200,message:'success', Data:[allCities]})
    })
})

router.get('/:id', (req, res) => {
    db.User.findById(req.params.id, (err, foundCities) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json({status:200,message:'success', Data:[foundCities]})
    })
} )


module.exports = router