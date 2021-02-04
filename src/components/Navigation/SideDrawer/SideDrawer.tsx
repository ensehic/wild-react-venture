import React, { useMemo } from 'react';

import Backdrop from '../../Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

interface SideDrawerProps {
    closed: () => void,
}

const SideDrawer = ({closed}: SideDrawerProps) =>
    useMemo(() => (
        <>
            <div className={`${classes.SideDrawer} bg-1`}>
                <nav onClick={closed}>
                    <NavigationItems />
                </nav>
            </div>
            <Backdrop backdropClicked={closed} />
        </>
    ), []);

export default SideDrawer;