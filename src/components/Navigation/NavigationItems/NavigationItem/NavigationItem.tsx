import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

interface NavigationItemProps {
    text: string,
    target: string,
    exact?: true | undefined
}

const NavigationItem = (props: NavigationItemProps) => (
    <li className={classes.navigationItem}>
        <NavLink
            to={props.target}
            exact={props.exact}
            activeClassName={classes.active}
        >
            <p>{props.text}</p>
        </NavLink>
    </li>
);

export default NavigationItem;