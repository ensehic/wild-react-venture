import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './App.css';
import Layout from './hoc/Layout/Layout';
import routes from './shared/appRoutes';

const App = () => {
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