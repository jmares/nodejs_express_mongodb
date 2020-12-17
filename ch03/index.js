const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('App listening on port 4000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
});

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
});