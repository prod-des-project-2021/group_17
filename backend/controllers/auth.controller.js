const User = require('../models/User');
const jwt = require('jsonwebtoken');

const refreshTokenSecret = 'yourrefreshtokensecrethere';
const refreshTokens = [];
const accessTokenSecret = 'youraccesstokensecret';

const register = async (req, res, next) => {
	const { first_name, last_name, email, password, address, phone_number, gender, dob } = req.body;
	try {
		//TODO verification of fields
		await User.create({
			first_name: first_name,
			last_name: last_name,
			email: email,
			password: password,
			address: address,
			phone_number: phone_number,
			gender: gender,
			dob: dob
		});
		const dbuser = await User.findOne({ where: { email: email, password: password } });

		const user = { id: dbuser.id, username: dbuser.email };
        const accessToken = jwt.sign(user, accessTokenSecret, {
            expiresIn: '20m'
        });
        const refreshToken = jwt.sign(user, refreshTokenSecret);
        refreshTokens.push(refreshToken);
        res.json({
            accessToken,
            refreshToken
        });
		res.sendStatus(201);
		next();
	} catch (e) {
		console.log(e.message);
		res.sendStatus(500) && next(e);
	}
};

const login = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const dbuser = await User.findOne({ where: { email: email, password: password } });

		const user = { id: dbuser.id, username: dbuser.email };

		if (dbuser) {
			const accessToken = jwt.sign(
				user, 
				accessTokenSecret, {
				expiresIn: '20m'
			});
			const refreshToken = jwt.sign(user, refreshTokenSecret);

			refreshTokens.push(refreshToken);

			res.json({
				accessToken,
				refreshToken
			});
		} else {
			res.send('Username or password incorrect');
		}
	} catch (e) {
		console.log(e.message);
		res.sendStatus(500) && next(error);
	}
};

module.exports = {
	login,
    register
};
