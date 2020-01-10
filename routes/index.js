// requires express 
const express = require('express');
const router = express.Router();
const  data  = require('../data/data.json');
// get the "home" page 
router.get('/', (req, res) => {
        //res.redirect('index');
});
router.get('/index' , (req,res) =>{

    // {data} to access json data.
res.render('index', {data})
});
//exports the files 
module.exports = router;


