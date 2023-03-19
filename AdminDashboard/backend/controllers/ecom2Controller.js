const asyncHandler = require("express-async-handler");
const { redisClient } = require("../config/redis");

const Product = require("../models/productClickModel");
const ecommerce_name = "ecommerce_2";

const getEcom2Product = asyncHandler(async (req, res) => {
  try {
    await Product.find({
      product: {
        $elemMatch: {
          ecommerce_name,
        },
      },
    });
    res.status(200).send(JSON.stringify(Product));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

const postEcom2Product = asyncHandler(async (req, res) => {
  const { pName, email } = req.body;
  const ecommerce_name = "ecommerce_2";
  const ipAddr = req.ip;

  const comb_1 = `${pName}:${ecommerce_name}:${ipAddr}:${email}`;
  const comb_2 = `${pName}:${ecommerce_name}:${email}`;
  const comb_3 = `${pName}:${ipAddr}`;

  try {
    if (
      (await redisClient.sadd([comb_1, comb_1])) &&
      (await redisClient.sadd([comb_2, comb_2])) &&
      (await redisClient.sadd([comb_3, comb_3]))
    ) {
      // Save the product unique click to mongodb
      const response = await Product.find({ product_name: pName });
      if (response != null) {
        await Product.findOneAndUpdate(
          { product_name: pName },
          { $inc: { no_of_clicks: 1 } }
        );
      } else {
        await Product.insert({
          product_name: pName,
          ecommerce_name: ecommerce_name,
          no_of_clicks: 1,
        });
      }
      res.status(200).send({ message: "Product updated successfully" });
    } else {
      res.status(404).send({ message: "User is not unique" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  getEcom2Product,
  postEcom2Product,
};
