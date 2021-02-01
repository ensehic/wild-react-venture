import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './views/Home';
import ReasonsToPlay from './views/ReasonsToPlay';
import TheWorld from './views/TheWorld/TheWorld';
import Travelers from './views/Travelers/Travelers';

const App = () => {
    const routes = [
        {path: '/', name: 'Home', View: Home},
        {path: '/reasons-to-play', name: 'ReasonsToPlay', View: ReasonsToPlay},
        {path: '/the-world', name: 'TheWorld', View: TheWorld},
        {path: '/travelers', name: 'Travelers', View: Travelers}
    ];

    return (
        <Layout>
            {
                routes.map(({ path, View }) => (
                    <Route key={path} exact path={path}>
                        {/* React Router passes the object containing a match object, which exists if the route matches, otherwise it's null.
                            This enables us to manage the in prop of CSSTransition based on the presence of match. */}
                        {/* Animate the transitions between routes. Styling is defined in App.css */}
                        {({ match }) => (
                            <CSSTransition
                                in={match !== null}
                                timeout={600}
                                classNames="view"
                                unmountOnExit
                            >
                                <div className="view">
                                    <View />
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))
            }
        </Layout>
    );
};

export default App;