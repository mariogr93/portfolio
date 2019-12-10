import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1>PORTFORLIO</h1>
        <Link className='portfolios' to='/restaurant'>
            Restaurant
        </Link>
        
        Tours, store, real state
    </div>
);

export default Portfolio;