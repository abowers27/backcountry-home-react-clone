import React, {Component} from 'react';

import './../styles/search.css';

class Search extends Component {
    render() {
        return (
            <div className='un-mid'>
                <button className='unm-but' type=""><i className="fa fa-search" aria-hidden="true"></i></button>
                <input className='unm-inp' type="" name="" placeholder='Search gear & clothing' />
            </div>
        )
    }
}

export default Search;