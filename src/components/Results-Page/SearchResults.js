import React from 'react';
import './SearchResults.css';
import ResultBox from './ResultBox.js'
import Header from '../Header/Header'


function SearchResults () {
    return (
        <div>
            <Header />
            <div className = 'label'>
                Search Results
            </div>
            <div className = 'total'>
                < ResultBox/>
            </div>
        </div>
    );
}

export default SearchResults