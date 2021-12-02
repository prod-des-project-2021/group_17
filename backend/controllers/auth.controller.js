const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const refreshTokenSecret = 'yourrefreshtokensecrethere';
const refreshTokens = [];
const accessTokenSecret = 'youraccesstokensecret';

const register = async (req, res, next) => {
	const { first_name, last_name, email, password, address, phone_number, gender, dob } = req.body;
	if (!first_name) {
		res.status(400);
		return res.send("first_name is required");
	}
	if (!last_name) {
		res.status(400);
		return res.send("last_name is required");
	}
	if (!email) {
		res.status(400);
		return res.send("email is required");
	}
	if (!address) {
		res.status(400);
		return res.send("address is required");
	}
	if (!phone_number) {
		res.status(400);
		return res.send("phone_number is required");
	}
	if (!gender) {
		res.status(400);
		return res.send("gender is required");
	}
	if (!dob) {
		res.status(400);
		return res.send("dob is required");
	}
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		await User.create({
			first_name: first_name,
			last_name: last_name,
			email: email,
			password: hashedPassword,
			address: address,
			phone_number: phone_number,
			gender: gender,
			dob: dob
		});
		const dbuser = await User.findOne({ where: { email: email, password: hashedPassword } });
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
		res.sendStatus(500) && next(error);
	}
};

const login = async (req, res, next) => {
	const { email, password } = req.body;
	if (!email) {
		res.status(400);
		return res.send("email is required");
	}
	if (!password) {
		res.status(400);
		return res.send("password is required");
	}
	try {
		const dbuser = await User.findOne({ where: { email: email } });
		if(!dbuser) return res.status(404);
		const validPassword = await bcrypt.compare(password, dbuser.password);
		if(!validPassword){
			res.status(403);
			return res.send("Invalid password");
		}
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
		res.sendStatus(500) && next(e);
	}
};

module.exports = {
	login,
    register
};
