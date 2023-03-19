const asyncHandler = require("express-async-handler");
const Product = require("../models/productClickModel");

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const response1 = await Product.find({
      ecommerce_name: "ecommerce_1",
    });

    const response2 = await Product.find({
      ecommerce_name: "ecommerce_2",
    });

    const response3 = await Product.find({
      ecommerce_name: "ecommerce_3",
    });

    let data = [];
    let totalClicks = 0;
    for (let i = 0; i < response1.length; i++) {
      for (let j = 0; j < response2.length; j++) {
        for (let k = 0; k < response3.length; k++) {
          if (
            (response1[i].product_name === response2[j].product_name) ===
            response3[k].product_name
          ) {
            let temp = {};
            temp.push(response1[i].product_name);
            totalClicks =
              response1[i].no_of_clicks +
              response2[j].no_of_clicks +
              response3[k].no_of_clicks;

            temp.push(totalClicks);
          }
        }
        data.push(temp);
      }
    }

    /*
    temp = {product_name: response1[0].product_name , no_of_click : totalClicks}

    data = [{product_name: response1[0].product_name , no_of_click : totalClicks},{product_name: response1[0].product_name , no_of_click : totalClicks}]
    */
    // let clicks = 0;
    // for (let i = 0; i < response1.length; i++) {
    //   clicks += response1[i].no_of_clicks;
    // }

    // for (let i = 0; i < response2.length; i++) {
    //   clicks += response2[i].no_of_clicks;
    // }

    // for (let i = 0; i < response3.length; i++) {
    //   clicks += response3[i].no_of_clicks;
    // }

    // res.status(200).json({
    //   product_name: response1[0].product_name,
    // });

    // @todo : logic for addition

    console.log(response1);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = getAllProduct;
