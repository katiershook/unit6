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
 console.log('test');
// app.use((req,res, next) =>{
// const err = new Error('not found');
// err.status =404;
// next(err);

// });
// app.use((err, req, res, next )  => { 
//     res.locals.error = err; 
//     res.status(err.status);
//     res.render('error',err);

// });

app.get('/project' ,(req, res)=> {
	res.render('project', {id})

    console.log('test');
})
app.use('/static', express.static('public'))

app.listen(3000, () => {
	console.log("up and running on local host 3000")
});

module.exports = router;