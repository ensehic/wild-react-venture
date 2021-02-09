import React, { ReactNode, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import StarBackground from './StarBackground/StarBackground';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import useWindowDimensions from '../../hooks/WindowDimensions';
import BackToTop from '../../components/BackToTop/BackToTop';
import useScrollPosition from '../../hooks/ScrollPosition';

interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const [width] = useWindowDimensions();
    const sideDrawerTransitionDuration = 300;
    const scrollPosition = useScrollPosition();

    /**
     * Used to determine whether to show DrawerToggle or NavigationItems in Navbar.
     * Also used to automatically close SideDrawer when window is resized to over 500px width.
     */
    const isMobileWidth = width < 500;

    /**
     * Toggles SideDrawer's visibility. Called when user clicks DrawerToggle.
     */
    const sideDrawerToggleHandler = () => setShowSideDrawer(!showSideDrawer);

    /**
     * Displays the back to top button if screen width is equal to or less than 1200px
     * and user has scrolled down 350px or more.
     */
    const shouldDisplayBackToTopButton = () => width <= 1200 && scrollPosition >= 350;

    return (
        <>
            <StarBackground />
            <Navbar drawerToggleClicked={sideDrawerToggleHandler} isMobileWidth={isMobileWidth} />

            {/* Animate the mounting and unmounting of SideDrawer. Animation is defined in App.css */}
            <CSSTransition
                in={showSideDrawer && isMobileWidth}
                timeout={sideDrawerTransitionDuration}
                mountOnEnter
                unmountOnExit
                classNames={'sideDrawerTransition'}
            >
                <SideDrawer
                    closed={sideDrawerToggleHandler}
                />
            </CSSTransition>

            {/* Main content - most importantly views. */}
            <main className={classes.content}>
                {props.children}
            </main>

            {
                shouldDisplayBackToTopButton() && <BackToTop />
            }

        </>
    );
};

export default Layout;