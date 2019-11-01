import React from 'react';
import HeaderBar from '../../components/Main/Header-Bar.component';
import About from '../../components/Main/About.component';
import Portfolio from '../../components/Main/Portfolio.component';

const HomePage = () => (

    <div className='homepage'>
        <HeaderBar/>
        <About/>
        <Portfolio/>
    </div>
) 

export default HomePage;