import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './views/Home';
import ReasonsToPlay from './views/ReasonsToPlay';
import TheWorld from './views/TheWorld/TheWorld';
import Travelers from './views/Travelers/Travelers';

const App = () => {
    const location = useLocation(); // Location being routed to

    const routes = [
        <Route key="home" path="/" component={Home} exact />,
        <Route key="reasons" path="/reasons-to-play" component={ReasonsToPlay} />,
        <Route key="the-world" path="/the-world" component={TheWorld} />,
        <Route key="travelers" path="/travelers" component={Travelers} />
    ];

    const transitions = useTransition(location, location => location.pathname, {
        from: {
            position: 'absolute',
            width: '100%',
            opacity: 0,
            transform: 'translateX(100%)'
        },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-50%)' }
    });

    return (
        <Layout>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        {routes}
                    </Switch>
                </animated.div>
            ))}
            {/* <Switch>
                {routes}
            </Switch> */}
        </Layout>
    );
};

export default App;
