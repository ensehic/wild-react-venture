import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
    return (
        <ul className={classes.navigationItems}>
            <NavigationItem text="Home" target="/" exact />
            <NavigationItem text="Travelers" target="/travelers" />
            <NavigationItem text="Screenshots" target="/screenshots" />
            <NavigationItem text="Whaow" target="/whaow" />
        </ul>
    );
};

export default NavigationItems;