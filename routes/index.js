const express = require('express');
const router = express.Router();
const  {data}  = require('../data/data.json');
const projects = {data};


router.get('/', (req, res) => {
        res.redirect('index');
});
router.get('index' ,(req,res) =>{

    console.log('hello');
res.render('index', {projects} )

});


module.exports = router;