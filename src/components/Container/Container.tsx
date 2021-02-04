import React from 'react';

import classes from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode,
    style?: React.CSSProperties
}

const Container = (props: ContainerProps) => (
    <div style={props.style} className={`${classes.container} bg-1a`}>
        {props.children}
    </div>
);

export default Container;

