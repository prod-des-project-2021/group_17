const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order.controller')
const {authenticateJWT,authenticateAdminJWT} = require("../utils/auth")

//TODO
router.post('/:pid', authenticateJWT, orderController.addOrder);
//router.get('/', orderController.getOrder)



module.exports = router