const BlogPost = require('../models/BlogPost.js');

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({}).populate('userid');
    console.log(req.session);
    res.render('index', {
        blogposts
    });
}