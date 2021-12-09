const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order.controller')
const {authenticateJWT, authenticateAdminJWT} = require("../utils/auth")

router.post('/checkout', authenticateJWT, orderController.orderCheckout);
router.post('/', authenticateJWT, orderController.addProductToOrder);
router.get('/', orderController.getOrder)

module.exports = router