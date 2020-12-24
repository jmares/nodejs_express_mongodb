const express = require('express');

const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const validateMiddleWare = require('./middleware/validationMiddleware');

app.use(fileUpload());

mongoose.connect('mongodb://localhost/my_database', { useUnifiedTopology: true, useNewUrlParser: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('App listening on port 4000 ...');
});

const myMiddleWare = (req, res, next) => {
    console.log('Custom middleware called')
    next()
};
app.use(myMiddleWare);

app.use('/posts/store', validateMiddleWare);

app.get('/', homeController);

app.get('/post/:id', getPostController);

app.get('/posts/new', newPostController);

app.post('/posts/store', storePostController);
