module.exports = {
    check_login (req, res, next) {
        if (req.isAuthenticated()) 
            return next();
        res.redirect('/home');
    }
};