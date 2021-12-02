const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
const User = require('../models/User');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, async (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            const currentUser =  await User.findOne({where: {id: user.id}});
            if(!currentUser) return res.sendStatus(401);
            req.user = currentUser;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const authenticateAdminJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, async (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            const currentUser =  await User.findOne({where: {id: user.id, isAdmin:1}});
            if(!currentUser) return res.sendStatus(401);
            req.user = currentUser;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {authenticateJWT,authenticateAdminJWT};