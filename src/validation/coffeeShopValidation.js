// validation/coffeeShopValidation.js
const { z } = require('zod');

const coffeeShopSchema = z.object({
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
  image: z.string().url("Invalid URL format"),
  products: z.array(z.object({
    name: z.string().min(1, "Product name is required"),
    price: z.number().min(0, "Price must be a positive number"),
    category: z.string().min(1, "Category is required")
  }))
});

module.exports = { coffeeShopSchema };
