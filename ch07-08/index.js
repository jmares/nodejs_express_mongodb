const express = require('express');
const path = require('path');

const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost');
const fileUpload = require('express-fileupload');

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

const validateMiddleWare = (req, res, next) => {
    if (req.files == null || req.body.title.trim() == '' || req.body.body.trim() == '') {
        return res.redirect('/posts/new');
    }
    next()
};
app.use('/posts/store', validateMiddleWare);

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render('index', {
        blogposts: blogposts
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post',(req,res)=>{    
    res.render('post')
})

app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost: blogpost
    });
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});

app.post('/posts/store', (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img', image.name), async (error) => {
        await BlogPost.create({
            ...req.body, 
            image: '/img/' + image.name
        });
        res.redirect('/');
    });
});
