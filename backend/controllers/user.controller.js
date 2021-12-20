const { connectionManager } = require('../config/db');
const User = require('../models/User');
const { use } = require('../routes');
const { fetchOwnProducts } = require('../services/product.service');
const { createUser, fetchUsers, fetchUserByID, removeUser, editUser, changeCredits } = require('../services/user.service');
const { removeProduct } = require('../services/product.service');

const addUser = async (req, res, next) => {
	const content = req.body;
	var error = {status:"", error:[]};
	try {
		await createUser(content);
		res.sendStatus(201);
		next();
	} catch (e) {
		res.status(500);
		error.status = 500;
		error.error.push(e.message);
		return res.send(error);
	}
};

const getUser = async (req, res, next) => {
	var error = {status:"", error:[]};
	try {
		var usr = await fetchUsers();
		res.status(200);
		res.send(usr);
		next();
	} catch (e) {
		res.status(400);
		error.status = 400;
		error.error.push(e.message);
		return res.send(error);
	}
};

const getUserbyId = async (req, res, next) => {
	var error = {status:"", error:[]};
	try {
		var usr = await fetchUserByID(req.params.uid);

		if (!usr) {
			res.status(500);
			error.status = 500;
			error.error.push("User does not exist");
			return res.send(error);
		} else {
			res.status(200);
			res.send(usr);
		}
		next();
	} catch (e) {
		res.status(400);
		error.status = 400;
		error.error.push(e.message);
		return res.send(error);
	}
};

const deleteUser = async (req, res, next) => {
	var error = {status:"", error:[]};
	try {
		let id = 0;
		if(req.user.isAdmin && req.params.hasOwnProperty("uid")) id = req.params.uid;
		else id = req.user.id;
		var usr = await fetchUserByID(id);
		if (!usr) {
			res.status(500);
			error.status = 500;
			error.error.push("User does not exist");
			return res.send(error);
		}

		let allprod = await fetchOwnProducts(id);
		for(let i = 0; i < allprod.length; ++i)
			await removeProduct(allprod[i].id);

		await removeUser(id);
		res.sendStatus(200);
		next();
	} catch (e) {
		res.status(400);
		error.status = 400;
		error.error.push(e.message);
		return res.send(error);
	}
};

const updateUser = async (req, res, next) => {
	var error = {status:"", error:[]};
	try {
		let id = 0;
		if(req.user.isAdmin && req.params.hasOwnProperty("uid")) id = req.params.uid;
		else id = req.user.id;
		await editUser(req.body, id);
		res.sendStatus(200);
		next();
	} catch (e) {
		res.status(400);
		error.status = 400;
		error.error.push(e.message);
		return res.send(error);
	}
};

const getMe = async (req, res, next) => {
	var error = {status:"", error:[]};
	try {
		console.log((req.user));
		var usr = await fetchUserByID(req.user.id);

		if (!usr) {
			res.status(500);
			error.status = 500;
			error.error.push("User does not exist");
			return res.send(error);
		} else {
			usr.id = undefined;
			res.status(200);
			res.send(usr);
		}
		next();
	} catch (e) {
		res.status(400);
		error.status = 400;
		error.error.push(e.message);
		return res.send(error);
	}
};

const addCredits = async(req, res, next) => {
	var error = {status:"", error:[]};
	try {

		if (!req.body.credits) {
			res.status(500);
			error.status = 500;
			error.error.push("no credits added");
			return res.send(error);
		} else {
			await changeCredits(req.user.id, req.body.credits);
			res.status(200);
			res.send({message:"OK"});
		}
		next();
	} catch (e) {
		res.status(400);
		error.status = 400;
		error.error.push(e.message);
		return res.send(error);
	}
}

module.exports = {
	addUser,
	getUser,
	getUserbyId,
	deleteUser,
	updateUser,
	getMe,
	addCredits
};
