const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')
const {authenticateJWT,authenticateAdminJWT} = require("../utils/auth")

router.post('/', authenticateJWT, productController.addProduct)
router.get('/', productController.getProduct)
router.get('/:pid', productController.getProductbyId)
router.delete('/:pid',authenticateJWT, productController.deleteProduct)
router.put('/:pid',authenticateJWT, productController.updateProduct)

module.exports = router