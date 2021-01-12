import React, { ReactNode } from 'react';

import StarBackground from './StarBackground/StarBackground';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import classes from './Layout.module.css';

interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <StarBackground />
            <Navbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;