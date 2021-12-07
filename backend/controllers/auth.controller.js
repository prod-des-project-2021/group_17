const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const {fetchUserByID} = require('../services/user.service');

const refreshTokenSecret = 'yourrefreshtokensecrethere';
const refreshTokens = [];
const accessTokenSecret = 'youraccesstokensecret';

const register = async (req, res, next) => {
	const { first_name, last_name, email, password, address, phone_number, gender, dob } = req.body;
	var error = {status:"", error:[]};
	if (!first_name) {
		error.error.push( "first name is required");
	}
	if (!last_name) {
		error.error.push( "last name is required");
	}
	if (!email) {
		error.error.push( "email is required");
	}
	if (!address) {
		error.error.push( "address is required");
	}
	if (!phone_number) {
		error.error.push( "phone number is required");
	}
	if (!gender) {
		error.error.push( "gender is required");
	}
	if (!dob) {
		error.error.push( "date of birth is required");
	}
	if(!password){
		error.error.push( "password is required");
	}

	if(error.error.length){
		error.status = 400;
		res.status(400);
		return res.send(error);
	}

	if(password.length <= 3){
		error.status = 400;
		error.error.push("password is too short");
		res.status(400);
		return res.send(error);
	}

	const dbuser = await User.findOne({ where: { email: email}});
	if(dbuser){
		error.status = 400;
		error.error.push("Email already in use");
		res.status(400);
		return res.send(error);
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
		res.status(201);
		res.json({
            accessToken,
            refreshToken
        });
		next();
	} catch (e) {
		error.status = 500;
		error.error.push(e.message);
		res.status(500);
		
		return res.send(error);
	}
};

const login = async (req, res, next) => {
	var error = {status:"", error:[]};
	const { email, password } = req.body;
	if (!email) {
		error.error.push("Email is required");
	}
	if (!password) {
		error.error.push("Email is required");
	}

	if(error.error.length){
		res.status(400);
		error.status = 400;
		return res.send(error);
	}

	try {
		const dbuser = await User.findOne({ where: { email: email } });
		if(!dbuser)
			error.error.push("Invalid email or password");
		
		if(!error.error.length)
		{
			const validPassword = await bcrypt.compare(password, dbuser.password);
			if(!validPassword)
				error.error.push("Invalid email or password");
		}
		
		if(!error.error.length){
			const user = { id: dbuser.id, username: dbuser.email };
			const accessToken = jwt.sign(
				user, 
				accessTokenSecret, {
				expiresIn: '20m'
			});
			const refreshToken = jwt.sign(user, refreshTokenSecret);
			refreshTokens.push(refreshToken);
			res.status(200);
			res.json({
				accessToken,
				refreshToken
			});
		}
		else{
			res.status(404);
			error.status = 404;
			return res.send(error);
		}
	} catch (e) {
		error.status = 500;
		error.error = e.message;
		res.status(500);
		
		return res.send(error);
	}
};

const token = async (req, res, next) => {
	var error = {status:"", error:[]};
	try {
		res.status(200);
		return res.send(await fetchUserByID(req.user.id));
	} catch (e) {
		error.status = 400;
		error.error = e.message;
		res.status(400);
		
		return res.send(error);
	}
}

module.exports = {
	login,
    register,
	token
};
