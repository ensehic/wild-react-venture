import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './App.css';
import Layout from './hoc/Layout/Layout';
import routes from './shared/appRoutes';

const App = () => {
    const [viewClassName, setViewClassName] = useState<string|undefined>(undefined);

    return (
        <Layout>
            {
                routes.map(({ path, View }) => (
                    <Route key={path} exact path={path}>

                        {/* Animate the transitions between routes. Styling is defined in App.css */}
                        {/* React Router passes the object containing a match object, which exists if the route matches, otherwise it's null.
                            This enables us to manage the in prop of CSSTransition based on the presence of match. */}

                        {({ match }) => (
                            <CSSTransition
                                in={match !== null}
                                timeout={600}
                                /**
                                 * .view positions the div absolutely, which would mess with the site layout if it were kept like that
                                 *  at all times. Using CSSTransition's callbacks, set .view only when needed.
                                 */
                                onEnter={() => setViewClassName('view')}
                                onEntered={() => setViewClassName(undefined)}
                                onExit={() => setViewClassName('view')}
                                classNames={viewClassName}
                                unmountOnExit
                            >
                                <div className={viewClassName}>
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