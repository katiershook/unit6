

const express = require('express');
const router = express.Router();

const {data} = require('../data/data.json');
const {projects} = data.projects;


router.get('/:id', (req, res) => {  
    const {id} = req.params;

   
    const {
  
        project_name,   
        description,
        technologies,
        live_link,
        github_link,
        images_urls,
    } = projects[id];

    const projectTemplates = { id,
    project_name,   
    description,
    technologies,
    live_link,
    github_link,
    images_urls,};
    res.render('projects', {projectTemplates})
}
    );

    




module.exports = router;