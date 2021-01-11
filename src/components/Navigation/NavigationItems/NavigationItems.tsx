import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
    return (
        <ul className={classes.navigationItems}>
            <NavigationItem text="Travelers" />
            <NavigationItem text="Screenshots" />
            <NavigationItem text="Whaow" />
        </ul>
    );
};

export default NavigationItems;