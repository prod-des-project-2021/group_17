const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.post('/', userController.addUser)
router.get('/', userController.getUser)
router.get('/:uid', userController.getUserbyId)
router.delete('/:uid', userController.deleteUser)
router.put('/:uid', userController.updateUser)

module.exports = router