import React, {Component} from 'react';
import UpperNav from './upper-nav';
import LowerNav from './lower-nav';

class Navbar extends Component {
    render() {
        return (
            <div>
                <UpperNav />
                <LowerNav />
            </div>
        )
    }
}

export default Navbar;