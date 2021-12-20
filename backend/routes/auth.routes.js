const express = require('express')
const router = express.Router()
const { login,register,token } = require('../controllers/auth.controller')
const {authenticateJWT} = require("../utils/auth")

router.post('/login', login)
router.post('/register', register)
router.post('/me',authenticateJWT, token)

module.exports = router