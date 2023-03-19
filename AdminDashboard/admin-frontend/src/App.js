import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';
import Ecomm3 from './components/Ecomm3/Ecomm3';
import Ecomm2 from './components/Ecomm2/Ecomm2';
import Ecomm1 from './components/Ecomm1/Ecomm1';


const Login = () => (
  <LoginPage />
);

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={HomePage} />
          <Route path="/ecomm1" component={Ecomm1} />
          <Route path="/ecomm2" component={Ecomm2} />
          <Route path="/ecomm3" component={Ecomm3} />
        </div>
      
      </Router>
      
    );
  }
}

export default App;
