import React, { useState, useEffect } from 'react';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './App.css';
import Layout from './hoc/Layout/Layout';
import routes from './shared/appRoutes';

const App = ({location}: RouteComponentProps) => {
    const [viewClassName, setViewClassName] = useState<string|undefined>(undefined);
    const {pathname} = location;
    const [previousPath, setPreviousPath] = useState('');

    /**
     * Fetches the index of the given path in `routes`.
     * @param path string
     */
    const getIndexOfRoutePath = (path: string) =>
        routes.map((route) => route.path)
            .indexOf(path);

    useEffect(() => {
        if (previousPath !== '') {

            const indexOfCurrentPath = getIndexOfRoutePath(pathname);
            const indexOfPreviousPath = getIndexOfRoutePath(previousPath);

            setViewClassName(
                indexOfCurrentPath < indexOfPreviousPath ? 'lower-index-view' : 'higher-index-view'
            );
        }

        setPreviousPath(pathname);
    }, [pathname]);

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
                                 * .lower-index-view and .higher-index-view position the div absolutely, which would mess with the site's layout if it were
                                 * kept like that at all times. Using CSSTransition's onExited callback, remove the classname, so the div is positioned normally.
                                 */
                                onExited={() => setViewClassName(undefined)}
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

export default withRouter(App);