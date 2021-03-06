const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')
const {authenticateJWT,authenticateAdminJWT} = require("../utils/auth")

router.post('/', authenticateJWT, productController.addProduct)
router.get('/', authenticateJWT, productController.getProduct)
router.get('/:pid', authenticateJWT, productController.getProductbyId)
router.delete('/:pid',authenticateJWT, productController.deleteProduct)
router.put('/:pid',authenticateJWT, productController.updateProduct)
router.get('/category/:cid', authenticateJWT, productController.getProductbyCategory)
router.get('/search/word', authenticateJWT, productController.getProductByWord)
router.get('/own/products', authenticateJWT, productController.getOwnProduct)
module.exports = router