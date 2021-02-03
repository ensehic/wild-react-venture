import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import routes from '../../../shared/appRoutes';

const NavigationItems = () => (
    <ul className={classes.navigationItems}>
        {
            routes.map(
                route => <NavigationItem
                    key={route.path}
                    text={route.name}
                    target={route.path}
                    exact
                />
            )
        }
    </ul>
);

export default NavigationItems;