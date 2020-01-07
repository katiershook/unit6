const express = require('express');
const router = express.Router();
const  data  = require('../data/data.json');
// get the "home" page 
router.get('/', (req, res) => {
        res.redirect('index');
});
router.get('/index' , (req,res) =>{
    console.log(data.projects[0]);
res.render('index', {data} )
});
module.exports = router;


