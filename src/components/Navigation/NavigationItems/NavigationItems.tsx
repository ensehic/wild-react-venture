import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => (
    <ul className={classes.navigationItems}>
        <NavigationItem text="Home" target="/" exact />
        <NavigationItem text="The World of Outer Wilds" target="/the-world" />
        <NavigationItem text="Astral bodies" target="/astral-bodies" />
        <NavigationItem text="Travelers" target="/travelers" />
    </ul>
);

export default NavigationItems;