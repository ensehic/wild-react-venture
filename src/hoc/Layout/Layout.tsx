import React, { ReactNode, useState } from 'react';

import StarBackground from './StarBackground/StarBackground';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import useWindowDimensions from '../../hooks/WindowDimensions';

interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const [width] = useWindowDimensions();

    /**
     * Used to determine whether to show DrawerToggle or NavigationItems in Navbar.
     * Also used to automatically close SideDrawer when window is resized to over 500px width.
     */
    const isMobileWidth = width <= 500;

    /**
     * Toggles SideDrawer's visibility.
     */
    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };

    return (
        <>
            <StarBackground />
            <Navbar drawerToggleClicked={sideDrawerToggleHandler} isMobileWidth={isMobileWidth} />
            {
                showSideDrawer &&
                isMobileWidth &&
                <SideDrawer closed={sideDrawerClosedHandler}/>
            }
            <main className={classes.content}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;