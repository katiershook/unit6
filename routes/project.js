const express = require('express');
const router = express.Router();

const {data} = require('../data/data.json');
const projects = data.projects;
//const {projects} = data.projects;
 console.log('apple')

router.get('/:id', (req, res) => {  
    const {id} = req.params;
    const {  project_name, description, technologies, live_link, github_link, image_urls} = projects[id];
    const template = { id, project_name, description, technologies, live_link, github_link, image_urls};
  
res.render('project', {data});
   
    // const {
    //    project_name,   
    //     description,
    //     technologies,
    //     live_link,
    //     github_link,
    //     images_urls,
    // } = data;

    // const projectTemplates = { id,
    // project_name,   
    // description,
    // technologies,
    // live_link,
    // github_link,
    // images_urls,};
 
}
    );

    




module.exports = router;



// //  img.image(src=`/static/images/${image_urls[1]}`)
// img.image(src=`/static/images/${image_urls[2]}`)
// img.image(src=`/static/images/${image_urls[3]}`)