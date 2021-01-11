import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Navbar.module.css';

const Navbar = () => {
    const classNames = [classes.navbar, 'bg-1'];

    return (
        <header className={classNames.join(' ')}>
            <NavigationItems />
        </header>
    );
};

export default Navbar;