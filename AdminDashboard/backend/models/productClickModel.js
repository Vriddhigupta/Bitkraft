const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  ecommerce_name: { type: String, required: true },
  no_of_clicks: { type: Number, required: true, default: 0 },
});

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
