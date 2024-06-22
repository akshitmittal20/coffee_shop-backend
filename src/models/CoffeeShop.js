const mongoose = require('mongoose');

const CoffeeShopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
  products: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
  }]
});

module.exports = mongoose.model('CoffeeShop', CoffeeShopSchema);
