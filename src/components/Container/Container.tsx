import React from 'react';

import classes from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode
}

const Container = (props: ContainerProps) => (
    <div className={`${classes.container} bg-1a`}>
        {props.children}
    </div>
);

export default Container;

