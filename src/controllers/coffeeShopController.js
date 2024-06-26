const CoffeeShop = require('../models/CoffeeShop');

// Get all coffee shops
exports.getAllCoffeeShops = async (req, res, next) => {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.json(coffeeShops);
  } catch (err) {
    next(err);
  }
};

// Get a single coffee shop by ID
exports.getCoffeeShopById = async (req, res, next) => {
  try {
    const coffeeShop = await CoffeeShop.findById(req.params.id);
    if (!coffeeShop) return res.status(404).json({ message: 'Coffee shop not found' });
    res.json(coffeeShop);
  } catch (err) {
    next(err);
  }
};

// Create a new coffee shop
exports.createCoffeeShop = async (req, res, next) => {
  const { name, location, rating, image, products } = req.body;

  const coffeeShop = new CoffeeShop({
    name, location, rating, image, products
  });

  try {
    const newCoffeeShop = await coffeeShop.save();
    res.status(201).json(newCoffeeShop);
  } catch (err) {
    next(err);
  }
};

// Update a coffee shop
exports.updateCoffeeShop = async (req, res, next) => {
  try {
    const updatedCoffeeShop = await CoffeeShop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCoffeeShop) return res.status(404).json({ message: 'Coffee shop not found' });
    res.json(updatedCoffeeShop);
  } catch (err) {
    next(err);
  }
};

// Delete a coffee shop
exports.deleteCoffeeShop = async (req, res, next) => {
  try {
    const deletedCoffeeShop = await CoffeeShop.findByIdAndDelete(req.params.id);
    if (!deletedCoffeeShop) return res.status(404).json({ message: 'Coffee shop not found' });
    res.json({ message: 'Coffee shop deleted' });
  } catch (err) {
    next(err);
  }
};
