import React from 'react';
import Carousel from 'nuka-carousel';
import slologo from './../images/slologo.png';

const Carous = () => {
    return (
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
    )
}

export default Carous;