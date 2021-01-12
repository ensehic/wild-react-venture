import React from 'react';

import classes from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode
}

const Container = (props: ContainerProps) => {
    return (
        <div className={`${classes.container} bg-1`}>
            {props.children}
        </div>
    );
};

export default Container;

