module.exports = (req, res, next) => {
    if (req.files == null || req.body.title.trim() == '' || req.body.body.trim() == '') {
        return res.redirect('/posts/new');
    }
    next()
}