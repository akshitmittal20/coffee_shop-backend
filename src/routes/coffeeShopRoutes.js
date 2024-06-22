const express = require('express');
const router = express.Router();
const coffeeShopController = require('../controllers/coffeeShopController');

router.get('/coffeeshops', coffeeShopController.getAllCoffeeShops);
router.get('/coffeeshops/:id', coffeeShopController.getCoffeeShopById);
router.post('/coffeeshops', coffeeShopController.createCoffeeShop);
router.put('/coffeeshops/:id', coffeeShopController.updateCoffeeShop);
router.delete('/coffeeshops/:id', coffeeShopController.deleteCoffeeShop);

module.exports = router;
