import React, { Component, useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./Ecomm3.css";
function Ecomm3() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/ecom3");
    const jsonData = await response.json();
    setData(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (event) => {
    console.log(event.target.name);
    if (event.target.name === "Home") {
      window.location.href = "http://localhost:3003/home";
    } else if (event.target.name === "FashionMantra") {
      window.location.href = "http://localhost:3003/ecomm1";
    } else if (event.target.name === "KapdaBazaar") {
      window.location.href = "http://localhost:3003/ecomm2";
    } else {
      window.location.href = "http://localhost:3003/ecomm3";
    }
  };

  // const cards = [
  //   { id: 1, title: "Card 1", description: "Description for Card 1" },
  //   { id: 2, title: "Card 2", description: "Description for Card 2" },
  //   { id: 3, title: "Card 3", description: "Description for Card 3" },
  //   { id: 4, title: "Card 4", description: "Description for Card 4" },
  //   { id: 5, title: "Card 5", description: "Description for Card 5" },
  //   { id: 6, title: "Card 6", description: "Description for Card 6" },
  // ];

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <button
            style={{ display: "inline-block", marginRight: "10px" }}
            name="Home"
            onClick={handleClick}
          >
            Home
          </button>
        </div>
        <button
          style={{ display: "inline-block", marginRight: "10px" }}
          name="FashionMantra"
          onClick={handleClick}
        >
          FashionMantra
        </button>
        <button
          style={{ display: "inline-block", marginRight: "10px" }}
          name="KapdaBazaar"
          onClick={handleClick}
        >
          KapdaBazaar
        </button>
        <button
          style={{ display: "inline-block", marginRight: "10px" }}
          name="MaxFashion"
          onClick={handleClick}
        >
          MaxFashion
        </button>
      </div>

      <div className="search-box">
        <button className="btn-search">
          <img src="./search.png" />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
        />
      </div>

      <div className="container">
        {data.map((card) => (
          <div key={card._id} className="card">
            <span>
              <h2 style={{ display: "inline" }}>{card.product_name}</h2>
              <p style={{ display: "inline" }}>{card.no_of_clicks}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ecomm3;
