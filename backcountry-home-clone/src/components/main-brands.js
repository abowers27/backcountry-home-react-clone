import React from 'react';
import North from './../images/norfa.png';
import Osprey from './../images/osprey.png';
import Patagonia from './../images/patagonia.png';
import Prana from './../images/prana.png';
import Bd from './../images/bd.png';
import Marmot from './../images/marmot.png';
import './../styles/main-brands.css';

const MainBrands = () => {
    return (
        <div className='main-brands'>
            <img className='mb-brand' src={North} alt="" />
            <img className='mb-brand' src={Osprey} alt="" />
            <img className='mb-brand' src={Patagonia} alt="" />
            <img className='mb-brand' src={Prana} alt="" />
            <img className='mb-brand' src={Bd} alt="" />
            <img className='mb-brand' src={Marmot} alt="" />
        </div>
    )
}

export default MainBrands;