import React from 'react';
import Logo from '../logo/logo';
import NavList from '../navlist/navlist';
import UserProfile from '../userProfile/userprofile';
import Information from '../information/information';
import SwitchMode from './switchMode';

const sidenav = () => (
    <div className='sidenav d-flex flex-column justify-content-between'>
        <div>
            <Logo />
            <SwitchMode />
            <NavList />
            <Information />
        </div>
        <UserProfile />
    </div>
)

export default sidenav;