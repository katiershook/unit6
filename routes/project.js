const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json');
//const projectData = data.projects;

router.get('/:id', (req, res) => {  
    const id = req.params;
    const projectPage = project[id].project_name;
   
    const {
  
        project_name,   
        description,
        technologies,
        live_link,
        github_link,
        images_urls,
    } = data[projectPage]

    const projectTemplates = { id,
    project_name,   
    description,
    technologies,
    live_link,
    github_link,
    images_urls,}
    res.render('project', {projectTemplates})
}
    );

    




module.exports = router;