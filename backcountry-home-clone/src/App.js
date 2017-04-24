import React, { Component } from 'react';
import Navbar from './components/navbar';
import Carous from './components/carousel';
import MainBrands from './components/main-brands';
import DealsTwo from './components/deals-two';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carous />
        <MainBrands />
        <DealsTwo />
      </div>
    );
  }
}

export default App;
