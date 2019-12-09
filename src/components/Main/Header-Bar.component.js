import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/Firebase-connection';

import MyName from './Name.component';
const HeaderBar = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <MyName className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/about'>
                About
            </Link>
            <Link className='option' to='/portfolio'>
                Portfolio
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN/UP
                </Link>
            }
            
        
        </div>
    </div>
);

export default HeaderBar;