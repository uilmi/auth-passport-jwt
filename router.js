// import router
const router = require('express').Router();


// Controllers
const auth = require('./controllers/authController');

// Restrict middleware
const restrict = require('./middlewares/restrict');
const onlyBinar = require('./middlewares/binar');

// Who am i page, this is a restricted page (must login first)
router.get('/api/v1/auth/whoami', restrict, auth.whoami);
router.get('/api/v1/auth/binar', restrict, onlyBinar, auth.whoami);


// Register Page
router.post('/api/v1/auth/register', auth.register);

// Login Page & API
router.post('/api/v1/auth/login', auth.login);


module.exports = router;


// router.get('/register', (req, res) => res.render('register'));
// router.get('/login', (req, res) => res.render('login'));
// Homepage, this is a restricted page (must login first)
// router.get('/', restrict, (req, res) => res.render('index'));