import React from 'react';

import Backdrop from '../../Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

interface SideDrawerProps {
    closed: () => void
}

const SideDrawer = ({closed}: SideDrawerProps) => (
    <>
        <Backdrop backdropClicked={closed} />
        <div className={`${classes.SideDrawer} bg-1`}>
            <nav onClick={closed}>
                <NavigationItems />
            </nav>
        </div>
    </>
);

export default SideDrawer;