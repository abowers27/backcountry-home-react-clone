import React, {Component} from 'react';
import Search from './search';

import BClogo from './../images/bc-logo.png';
import logo from './../images/logo.png';
import phone from './../images/phone.png';

import './../styles/upper-nav.css';

class UpperNav extends Component {
    render() {
        return (
            <div className='upper-nav'>
                <div className='un-left'>
                    <img className='unl-bclogo' src={BClogo} alt=""/>
                    <i className="fa fa-bars hide-mobile unl-hamb" aria-hidden="true"></i>
                    <img className='hide-mobile unl-logo' src={logo} alt="" />
                </div>
                <Search />
                <div className='un-right'>
                    <div className='unr-chat'>
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                        <p>Chat</p>
                    </div>
                    <div className='unr-phone'>
                        <img className='unrp-img' src={phone} alt="" />
                        <p>1-800-409-4502</p>
                    </div>
                    <div className='unr-account'>
                        <p>My Account</p>
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                    <div className='unr-cart'>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpperNav;