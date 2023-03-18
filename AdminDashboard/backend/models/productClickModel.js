const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  ecommerce_name: { type: String, required: true },
  no_of_clicks: { type: Number, required: true },
});
