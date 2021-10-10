const { User } = require('../models');
const passport = require('../lib/passport');

function format(user) {
    const { id, username } = user
    return {
        id,
        username,
        accessToken: user.generateToken()
    }
}


module.exports = {
    register: (req, res, next) => {
        // Kita panggil static method register yang sudah kita buat tadi
        User.register(req.body)
            .then((user) => {
                res.json(user);
            })
            .catch(err => next(err));
    },

    login: (req, res) => {
        User.authenticate(req.body)
            .then(user => {
                res.json(
                    format(user)
                )
            });
    },

    whoami: (req, res) => {
        /* req.user adalah instance dari User Model, hasil autentikasi dari passport. */
        const currentUser = req.user;
        res.json(currentUser);
    }
}