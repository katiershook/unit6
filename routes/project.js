const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json');
 console.log(data)
router.get('/projects', (req, res) => {  
    //const {0} = req.params;
    const {
        project_name,   
        description,
        technologies,
        live_link,
        github_link,
        images_url,
    } = data[projects][0]
}
    );
// console.log(project_name);



module.exports = router;