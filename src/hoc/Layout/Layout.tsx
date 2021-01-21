import React, { ReactNode, useState } from 'react';
import { Transition } from 'react-transition-group';

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
    const sideDrawerTransitionDuration = 300;

    /**
     * Used to determine whether to show DrawerToggle or NavigationItems in Navbar.
     * Also used to automatically close SideDrawer when window is resized to over 500px width.
     */
    const isMobileWidth = width <= 500;

    /**
     * Toggles SideDrawer's visibility. Called when user clicks DrawerToggle.
     */
    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    /**
     * Hides SideDrawer. Called when user clicks on SideDrawer.
     */
    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };

    const defaultStyle = {
        transition: `transform ${sideDrawerTransitionDuration}ms linear`,
        transform: 'translateX(-100%)',
    };

    const transitionStyles = {
        entering: { transform: 'translateX(-100%)' },
        entered:  { transform: 'translateX(0)' },
        exiting:  { transform: 'translateX(-100%)' },
        exited:  { transform: 'translateX(-100%)' },
        unmounted: { transform: 'translateX(-100%)' }
    };

    return (
        <>
            <StarBackground />
            <Navbar drawerToggleClicked={sideDrawerToggleHandler} isMobileWidth={isMobileWidth} />

            <Transition
                in={showSideDrawer && isMobileWidth}
                timeout={sideDrawerTransitionDuration}
                mountOnEnter
                unmountOnExit
            >
                {state => (
                    <SideDrawer
                        closed={sideDrawerClosedHandler}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    />
                )}
            </Transition>

            <main className={classes.content}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;