module.exports = (req, res) => {
    if (req.session.userId) {
        return res.render('create');
    }
    res.redirect('/auth/login');
}