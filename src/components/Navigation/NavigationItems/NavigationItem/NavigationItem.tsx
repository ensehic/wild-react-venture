import React from 'react';

import classes from './NavigationItem.module.css';

interface NavigationItemProps {
    text: string,
    target?: string
}

const NavigationItem = (props: NavigationItemProps) => {
    return (
        <li className={classes.navigationItem}><a href="#">{props.text}</a></li>
    );
};

export default NavigationItem;