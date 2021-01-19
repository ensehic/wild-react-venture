import React from 'react';

import classes from './DrawerToggle.module.css';

interface DrawerToggleProps {
    drawerToggleClicked: () => void
}

const DrawerToggle = ({drawerToggleClicked}: DrawerToggleProps) => (
    <div className={classes.DrawerToggle} onClick={drawerToggleClicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;