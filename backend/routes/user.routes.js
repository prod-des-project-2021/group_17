const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const {authenticateJWT,authenticateAdminJWT} = require("../utils/auth")

router.post('/me',authenticateJWT, userController.getMe)
router.post('/',authenticateJWT, userController.addUser)
router.get('/',authenticateAdminJWT, userController.getUser)
router.get('/:uid',authenticateJWT, userController.getUserbyId)
router.delete('/:uid',authenticateJWT, userController.deleteUser)
router.put('/:uid',authenticateJWT, userController.updateUser)

module.exports = router