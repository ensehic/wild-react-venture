import React from 'react';

import classes from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode,
    style?: React.CSSProperties,
    classNameProp?: string,
    defaultBackground?: true
}

const Container = ({children, style, classNameProp, defaultBackground}: ContainerProps) => (
    <div
        style={style}
        className={[
            classes.container,
            defaultBackground && 'bg-1a',
            classNameProp && classNameProp
        ].join(' ')}
    >
        {children}
    </div>
);

export default Container;

