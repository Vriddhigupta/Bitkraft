import React, { Component,useState } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './Ecomm3.css';
function Ecomm3() {

  const handleClick = (event) => {
    console.log(event.target.name)
    if(event.target.name==='Home')
    {
      window.location.href = "http://localhost:3000/home";
    }
    else if (event.target.name==='FashionMantra') {
      window.location.href = "http://localhost:3000/ecomm1"
    } 
    else if (event.target.name==='KapdaBazaar') {
      window.location.href = "http://localhost:3000/ecomm2"
    }
    else {
      window.location.href = "http://localhost:3000/ecomm3"
    }
  };

  const cards = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, title: 'Card 5', description: 'Description for Card 5' },
    { id: 6, title: 'Card 6', description: 'Description for Card 6' },
  ];


  return (
    
    <div>
    <div className='button-style'>
    <ButtonGroup aria-label="Basic example">
    <Button name="Home" onClick={handleClick}>Home</Button>
      <Button name="FashionMantra" onClick={handleClick}>FashionMantra</Button>
      <Button name="KapdaBazaar" onClick={handleClick}>KapdaBazaar</Button>
      <Button name="MaxFashion" onClick={handleClick}>MaxFashion</Button>
    </ButtonGroup>
    </div>

    <div className="search-box">
    <button className="btn-search"><img src="./search.png"/></button>
    <input type="text" className="input-search" placeholder="Type to Search..."/>
  </div>
    

     <div className='container'>
      {cards.map((card) => (
        <div key={card.id} className="card">
          <span>
          <h2 style={{ display: 'inline' }}>{card.title}</h2>
          <p style={{ display: 'inline' }}>{card.description}</p>
          </span>
        </div>
      ))}
      </div>
    </div>
    

  );
}

export default Ecomm3;
