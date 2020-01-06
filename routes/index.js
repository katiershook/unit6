const express = require('express');
const router = express.Router();
const  data  = require('../data/data.json');
// get the "home" page 
router.get('/', (req, res) => {
        res.redirect('index');
});
router.get('/index' , (req,res) =>{
   
res.render('index', {data} )
});
module.exports = router;


