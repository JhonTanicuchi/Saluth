module.exports = {
    check_login (req, res, next) {
        if (req.isAuthenticated()) 
            return next();
        return res.redirect('/login');
    },
    check_notlogin (req, res, next) {
        if (!req.isAuthenticated()) 
            return next();
        return res.redirect('/institucion_medica');
    }
};