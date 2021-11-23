const { connectionManager } = require("../config/db");
const User = require("../models/User");
const { use } = require("../routes");
const userService = require("../services/user.service")
const {createUser} = userService
const {fetchUsers} = userService
const {fetchUserByID} = userService
const {removeUser} = userService
const {editUser} = userService

const addUser = async (req, res, next) => {
  const content = req.body;
  try {
    await createUser(content)
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500)
  }
}

const getUser = async (req, res, next) => {
  try{
    usr = await fetchUsers()
    
    res.status(200)
    res.send(usr)
    next()
  } catch(e){
    console.log(e.message)
    res.sendStatus(400)
  }
  
};

const getUserbyId = async (req, res, next) => {
  try{
    usr = await fetchUserByID(req.params.uid)

    if(!usr){
      res.sendStatus(404)
    }
    else{
      res.status(200)
      res.send(usr)
    }
    next()
  } catch(e){
    console.log(e.message)
    res.sendStatus(400)
  }

}

const deleteUser = async (req, res, next) => {
  try{
    await removeUser(req.params.uid)
    res.sendStatus(200)
    next()
  }catch(e){
    console.log(e.message)
    res.sendStatus(400)
  }
}

const updateUser = async (req, res, next) => {
  try{
    await editUser(req.body, req.params.uid)
    res.sendStatus(200)
    next()
  }catch(e){
    console.log(e.message)
    res.sendStatus(400)
  }
}

module.exports = {
    addUser,
    getUser,
    getUserbyId,
    deleteUser,
    updateUser
}