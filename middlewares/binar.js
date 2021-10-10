module.exports = (req, res, next) => {
    if (req.user && req.user.username == 'binar') {
        next();
    }
    res.json('User is not Binar');
}