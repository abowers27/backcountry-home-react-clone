import React, {Component} from 'react';
import './../styles/lower-nav.css';

class LowerNav extends Component {
    render() {
        return (
            <div className='lower-nav'>
                <div className='ln-new'>
                    <h3>New Arrivals</h3>
                    <div className='ln-drop ln-arr'>
                        <div className='lnd-col'>
                            <h2>Women</h2>
                            <p>Tops</p>
                            <p>Pants</p>
                            <p>Dresses & Skirts</p>
                            <p>Jackets</p>
                            <p>Swimwear</p>
                            <p>Accessories</p>
                            <p>Footwear</p>
                            <p>Shop All</p>
                        </div>
                        <div className='lnd-col'>
                            <h2>Men</h2>
                            <p>Shirts</p>
                            <p>Pants</p>
                            <p>Shorts</p>
                            <p>Hoodies & Sweaters</p>
                            <p>Jackets</p>
                            <p>Accessories</p>
                            <p>Footwear</p>
                            <p>Shop All</p>
                        </div>
                        <div className='lnd-col'>
                            <h2>Gear</h2>
                            <p>Ski</p>
                            <p>Snowboard</p>
                            <p>Hike & Camp</p>
                            <p>Climb</p>
                            <p>Backpack</p>
                            <p>Surf & Paddle</p>
                            <p>Fitness</p>
                            <p>Accessories</p>
                        </div>
                        <div className='lnd-col'>
                            <h2>Brands</h2>
                            <p>Patagonia</p>
                            <p>The North Face</p>
                            <p>Osprey</p>
                            <p>Big Agnes</p>
                            <p>Marmot</p>
                            <p>Prana</p>
                            <p>Arc'teryx</p>
                        </div>
                    </div>
                </div>
                <div className='ln-new'>
                    <h3>Brands</h3>
                    <div className='ln-drop ln-br'>
                        <h2>Shop Over A Thousand Brands</h2>
                        <div className='lndr-letters'>
                            <p>#</p>
                            <p>A</p>
                            <p>B</p>
                            <p>C</p>
                            <p>D</p>
                            <p>E</p>
                            <p>F</p>
                            <p>G</p>
                            <p>H</p>
                            <p>I</p>
                            <p>J</p>
                            <p>K</p>
                            <p>L</p>
                            <p>M</p>
                            <p>N</p>
                            <p>O</p>
                            <p>P</p>
                            <p>Q</p>
                            <p>R</p>
                            <p>S</p>
                            <p>T</p>
                            <p>U</p>
                            <p>V</p>
                            <p>W</p>
                            <p>X</p>
                            <p>Y</p>
                            <p>Z</p>
                        </div>
                    </div>
                </div>
                <div className='ln-new'>
                    <h3>Activities</h3>
                    <div className='ln-drop ln-act'>
                        <div className='lnact-line'> 
                        </div>
                        <div className='lndr-letters'>
                            <p>Fly Fish</p>
                            <p>Run</p>
                            <p>Paddle</p>
                            <p>Surf</p>
                            <p>Showshoe</p>
                            <p>Travel</p>
                        </div>
                    </div>
                </div>
                <div className='ln-new'>
                    <h3>Women</h3>
                    <div className='ln-drop ln-wom'>
                        
                    </div>
                </div>
                <div className='ln-new'>
                    <h3>Men</h3>
                    <div className='ln-drop ln-men'>
                        
                    </div>
                </div>
                <div className='ln-new'>
                    <h3>Kids</h3>
                    <div className='ln-drop ln-kid'>
                        
                    </div>
                </div>
                <div className='ln-new ln-righty'>
                    <h3>Sale</h3>
                    <div className='ln-drop ln-sal'>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default LowerNav;