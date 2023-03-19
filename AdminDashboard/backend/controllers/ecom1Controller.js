const asyncHandler = require("express-async-handler");
const { redisClient } = require("../config/redis");

const Product = require("../models/productClickModel");
const ecommerce_name = "ecommerce_1";
const getEcom1Product = asyncHandler(async (req, res) => {
  try {
    await Product.find({
      product: {
        $eleMatch: {
          ecommerce_name,
        },
      },
    });
  } catch (err) {}
});

const postEcom1Product = asyncHandler(async (req, res) => {
  const { pName, email } = req.body;

  const ipAddr = req.ip;

  const comb_1 = `${pName}:${ecommerce_name}:${ipAddr}:${email}`;
  const comb_2 = `${pName}:${ecommerce_name}:${email}`;
  const comb_3 = `${pName}:${ipAddr}`;

  try {
    if (
      redisClient.sadd(comb_1, comb_1) &&
      redisClient.sadd(comb_2, comb_2) &&
      redisClient.sadd(comb_3, comb_3)
    ) {
      // Save the product unique click to mongodb
      await Product.findAndModify({
        query: { product_name: pName },
        update: { $inc: { no_of_clicks: 1 } },
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  getEcom1Product,
  postEcom1Product,
};
