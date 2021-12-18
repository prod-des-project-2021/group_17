const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const {authenticateJWT,authenticateAdminJWT} = require("../utils/auth")

router.post('/me',authenticateJWT, userController.getMe)
router.post('/',authenticateJWT, userController.addUser)
router.put('/add/credits', authenticateJWT, userController.addCredits)
router.get('/',authenticateAdminJWT, userController.getUser)
router.get('/:uid',authenticateAdminJWT, userController.getUserbyId)
router.delete('/:uid',authenticateAdminJWT, userController.deleteUser)
router.delete('/',authenticateJWT, userController.deleteUser)
router.put('/:uid',authenticateAdminJWT, userController.updateUser)
router.put('/',authenticateJWT, userController.updateUser)


module.exports = router