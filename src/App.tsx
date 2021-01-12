import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './views/Home';

const App = () => {
    const routes = [
        <Route key="home" path="/" component={Home} strict />
    ];

    return (
        <Router>
            <Layout>
                <Switch>
                    {routes}
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
