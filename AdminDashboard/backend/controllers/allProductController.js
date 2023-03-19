const asyncHandler = require("express-async-handler");
const Product = require("../models/productClickModel");

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const response1 = await Product.find({
      product: {
        $elemMatch: {
          ecommerse_name: "ecommerce_1",
        },
      },
    });

    console.log(response1);
    res.status(200).send(JSON.stringify(Product));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = getAllProduct;
