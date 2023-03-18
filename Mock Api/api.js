const express = require('express');
const app = express();

// Define an API endpoint at /api/hello
const Products = [
    {
      "pSold": 0,
      "pQuantity": 5,
      "pImages": [
        "1679126269491_m_613a62afce1e87f694a33de4.jpg",
        "1679126269497_s_60653e5cbcdb2f27a661b63c.jpg"
      ],
      "pOffer": "10",
      "_id": "64156efdeac3a031442080d7",
      "pName": "Pink Dress by Zara",
      "pDescription": "Pink Satin dress by Zara - floral print",
      "pPrice": 1800,
      "pCategory": {
        "_id": "64156dfdeac3a031442080d1",
        "cName": "Womenwear"
      },
      "pStatus": "Active",
      "pRatingsReviews": [
        {
          "createdAt": "2023-03-18T09:03:09.513Z",
          "_id": "64157ea7cbf2dd2568976c61",
          "review": "good product but expensive",
          "user": "64156d6ceac3a031442080ba",
          "rating": "5"
        }
      ],
      "createdAt": "2023-03-18T07:57:49.537Z",
      "updatedAt": "2023-03-18T09:04:39.894Z",
      "__v": 0
    },

    {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
          "https://cdn16.nnnow.com/web-images/large/styles/GOI8OKZRP7R/1609758143103/1.jpg",
          "https://cdn16.nnnow.com/web-images/large/styles/GOI8OKZRP7R/1609758143103/1.jpg"
        ],
        "pOffer": "10",
        "_id": "64156efdeac3a031442080d7",
        "pName": "Blue Shirt by SansClothing",
        "pDescription": "Blue Shirt by SansClothing - Strips Shirt",
        "pPrice": 1800,
        "pCategory": {
          "_id": "64156dfdeac3a031442080d1",
          "cName": "Womenwear"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
          {
            "createdAt": "2023-03-18T09:03:09.513Z",
            "_id": "64157ea7cbf2dd2568976c61",
            "review": "good product but expensive",
            "user": "64156d6ceac3a031442080ba",
            "rating": "5"
          }
        ],
        "createdAt": "2023-03-18T07:57:49.537Z",
        "updatedAt": "2023-03-18T09:04:39.894Z",
        "__v": 0
      },

      {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
          "1679126269491_m_613a62afce1e87f694a33de4.jpg",
          "1679126269497_s_60653e5cbcdb2f27a661b63c.jpg"
        ],
        "pOffer": "10",
        "_id": "64156efdeac3a031442080d7",
        "pName": "Pink Dress by Zara",
        "pDescription": "Pink Satin dress by Zara - floral print",
        "pPrice": 1800,
        "pCategory": {
          "_id": "64156dfdeac3a031442080d1",
          "cName": "Womenwear"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
          {
            "createdAt": "2023-03-18T09:03:09.513Z",
            "_id": "64157ea7cbf2dd2568976c61",
            "review": "good product but expensive",
            "user": "64156d6ceac3a031442080ba",
            "rating": "5"
          }
        ],
        "createdAt": "2023-03-18T07:57:49.537Z",
        "updatedAt": "2023-03-18T09:04:39.894Z",
        "__v": 0
      },

      {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
          "1679126269491_m_613a62afce1e87f694a33de4.jpg",
          "1679126269497_s_60653e5cbcdb2f27a661b63c.jpg"
        ],
        "pOffer": "10",
        "_id": "64156efdeac3a031442080d7",
        "pName": "Pink Dress by Zara",
        "pDescription": "Pink Satin dress by Zara - floral print",
        "pPrice": 1800,
        "pCategory": {
          "_id": "64156dfdeac3a031442080d1",
          "cName": "Womenwear"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
          {
            "createdAt": "2023-03-18T09:03:09.513Z",
            "_id": "64157ea7cbf2dd2568976c61",
            "review": "good product but expensive",
            "user": "64156d6ceac3a031442080ba",
            "rating": "5"
          }
        ],
        "createdAt": "2023-03-18T07:57:49.537Z",
        "updatedAt": "2023-03-18T09:04:39.894Z",
        "__v": 0
      },

      {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
          "1679126269491_m_613a62afce1e87f694a33de4.jpg",
          "1679126269497_s_60653e5cbcdb2f27a661b63c.jpg"
        ],
        "pOffer": "10",
        "_id": "64156efdeac3a031442080d7",
        "pName": "Pink Dress by Zara",
        "pDescription": "Pink Satin dress by Zara - floral print",
        "pPrice": 1800,
        "pCategory": {
          "_id": "64156dfdeac3a031442080d1",
          "cName": "Womenwear"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
          {
            "createdAt": "2023-03-18T09:03:09.513Z",
            "_id": "64157ea7cbf2dd2568976c61",
            "review": "good product but expensive",
            "user": "64156d6ceac3a031442080ba",
            "rating": "5"
          }
        ],
        "createdAt": "2023-03-18T07:57:49.537Z",
        "updatedAt": "2023-03-18T09:04:39.894Z",
        "__v": 0
      }
]


app.get('/api/prods', (req, res) => {
  res.send(Products);
});

// Start the server
app.listen(8003, () => {
  console.log('Server started on port 8003');
});
