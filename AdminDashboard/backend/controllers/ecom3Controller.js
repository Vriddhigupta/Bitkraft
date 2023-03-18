const asyncHandler = require("express-async-handler");

const getEcom3Product = asyncHandler(async (req, res) => {});

const postEcom3Product = asyncHandler(async (req, res) => {
  const { pName, email } = req.body;
  const ecommerce_name = "ecommerce_3";
  const ipAddr = req.ip;

  const comb_1 = `${pName}:${ecommerce_name}:${ipAddr}:${email}`;
  const comb_2 = `${pName}:${ecommerce_name}:${email}`;
  const comb_3 = `${pName}:${ipAddr}`;

  if (
    redisClient.sadd(comb_1, comb_1) &&
    redisClient.sadd(comb_2, comb_2) &&
    redisClient.sadd(comb_3, comb_3)
  ) {
    // Save the product unique click to mongodb
  }
});

module.exports = {
  getEcom3Product,
  postEcom3Product,
};
