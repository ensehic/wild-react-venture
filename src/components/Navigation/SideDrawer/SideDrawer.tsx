import React from 'react';

import Backdrop from '../../Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

interface SideDrawerProps {
    closed: () => void,
    style: {
        transition: string,
        transform: string
    }
}

const SideDrawer = ({closed, style}: SideDrawerProps) => (
    <>
        <Backdrop backdropClicked={closed} />
        <div className={`${classes.SideDrawer} bg-1`} style={style}>
            <nav onClick={closed}>
                <NavigationItems />
            </nav>
        </div>
    </>
);

export default SideDrawer;