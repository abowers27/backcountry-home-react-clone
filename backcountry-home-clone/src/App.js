import React, { Component } from 'react';
import Navbar from './components/navbar';
import Carousel from 'nuka-carousel';
import './App.css';
import camping from './images/camping.jpg';
import slo from './images/slo.jpg';
import slologo from './images/slologo.png';
import face from './images/face.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel slidesToShow={1} cellAlign='center' wrapAround={true} slideWidth={.70} speed={1000}>
          <div className='car-one'>
            <div className='cone-div'>
              <img src={slologo} alt="" />
              <h1>San Luis Obispo</h1>
              <div className='cone-line'>
              </div>
              <p>State of Gold: Chapter 2</p>
              <div className='cone-exp'>
                <h4>Explore</h4>
              </div>
            </div>
          </div>
          <div className='car-two'>
            
          </div>
          <div className='car-three'>
            
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
