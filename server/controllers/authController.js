const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        let {username, password} = req.body;
        let db = req.app.get('db');
        let [foundUser] = await db.check_for_user([username])
        if (foundUser) return res.status(200).send({message: 'That username is already taken. Please choose another one!'})
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let [createdUser] = await db.create_user([username, hash]);
        req.session.user = { id: createdUser.id, username: createdUser.username }
        res.status(200).send({userData: req.session.user, message: 'loggedIn'})
    },
    login: async (req, res) => {
        let {username, password} = req.body;
        let db = req.app.get('db');
        let [foundUser] = await db.check_for_user([username]);
        if (foundUser) {
            let result = bcrypt.compareSync(password, foundUser.hash)
            if (result) {
                req.session.user = { id: foundUser.id, username: foundUser.username }
                res.status(200).send({userData: req.session.user, message: 'loggedIn'});
            } else {
                res.status(200).send({message: 'Incorrect password! Try again.'})
            }
        } else {
            res.status(200).send({message: `That username isn't in our system. Please register first, or try a different username.`})
        }
    },
    getUserData: async (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(200).send({message: 'User is not logged in'});
        }
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    }
}