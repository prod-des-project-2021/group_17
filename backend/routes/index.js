const express = require('express')
const router = express.Router()
const user = require('./user.routes')
const product = require('./product.routes')
const order = require('./order.routes')

router.use('/user',user);
router.use('/product',product)
router.use('/order',order)

module.exports = router