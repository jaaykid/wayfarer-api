const express = require('express');
const router = express.Router();
const db = require('../models'); 



router.get('/', (req,res) =>{
    req.session.destroy(err => {
        if (err) return res.status(400).json({error: 'error'});
        res.status(400).json({success: 'this worked'})
    })
})

module.exports = router