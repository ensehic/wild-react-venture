import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Navbar.module.css';
import DrawerToggle from './DrawerToggle/DrawerToggle';

interface NavbarProps {
    drawerToggleClicked: () => void,
    isMobileWidth: boolean
}

const Navbar = ({drawerToggleClicked, isMobileWidth}: NavbarProps) => (
    <header className={`${classes.navbar} bg-1`}>
        { isMobileWidth && <DrawerToggle drawerToggleClicked={drawerToggleClicked} /> }
        {
            !isMobileWidth &&
            <nav>
                <NavigationItems />
            </nav>
        }
    </header>
);

export default Navbar;