const express = require('express');
const data = require('./data/data.json')
const app = express();
const router = express.Router();
const routes = require('./routes');
const indexRoute = require('./routes/index');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({
	extended: false
}));
app.set('view engine', 'pug');
app.use(routes);

app.use('/', indexRoute);


app.use('/static', express.static('public'));


const main = require('./routes/index');
const about = require('./routes/about');
const project = require('./routes/project');
app.use('/about',about );
app.use('/project', project)
 console.log('test');
app.use((req,res, next) =>{
const err = new Error('Yikes! Something is not quite right!');
err.status =404;
next(err);

});
app.use((req,res,next)=>{
    const err = new Error('Oh no! There is nothing here');
    err.status = 404;
    console.log(err);
    next(err);
});

app.get('/project' ,(req, res)=> {
	res.render('project', {id})

    console.log('test');
})
app.use('/static', express.static('public'))



app.listen(3000, () => {
	console.log("up and running on local host 3000")
});

module.exports = router;