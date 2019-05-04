const express = require('express');
const router = express.Router();
const db = require('../models'); 


router.get('/', (req, res) => {
    db.City.find( {} , (err, allCities) => {
        if (err) return status(400).json({status: 400, err: 'something went wrong'});
        res.json(allCities)
    })
})


module.exports = router