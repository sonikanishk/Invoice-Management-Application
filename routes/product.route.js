const express = require('express');
const router = express.Router();

const{
    productsController,
    filterproductController,
    searchproductController
} = require('../controllers/product.controller')


router.get('/products',productsController);
router.post('/filterproducts',filterproductController)
router.post('/searchproducts',searchproductController);

module.exports = router