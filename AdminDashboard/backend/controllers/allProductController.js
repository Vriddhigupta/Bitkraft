const Product = require("../models/productClickModel");

const getAllProduct = async (req, res) => {
  await Product.aggregate([
    {
      $group: { _id: "$product_name", total_clicks: { $sum: "$no_of_clicks" } },
    },
  ])
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

module.exports = getAllProduct;
