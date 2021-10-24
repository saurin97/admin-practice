import React from 'react';
import SearchIcon from '../icons/search/search';
import MenuIcon from '../icons/hamburger/hamburger';

const searchComponent = () => (
    <div className='search'>
        <SearchIcon className='search-icon'/>
        <input type='text' placeholder='Search analytics'/>
        <MenuIcon className='menu-icon' />
    </div>
)

export default searchComponent;