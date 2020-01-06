const express = require('express');
const router = express.Router();
const  {data}  = require('../data/data.json');
const projects = {data};

// get the "home" page 
router.get('/', (req, res) => {
        res.redirect('index');
});

router.get('/index' ,(req,res) =>{
   
    console.log(projects);
res.render('index', {projects} )

});

router.get('/projects/:id' , function (req, res ,next) {

    const projectId = req.params.id 
    const project = projects.find ( ({ id }) =>  id === +projectId);

    if (project){
        res.render('project')
    } else {
        res.sendStatus(404);
    }

});


module.exports = router;