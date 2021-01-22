import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './views/Home';
import TheWorld from './views/TheWorld/TheWorld';
import Travelers from './views/Travelers';

const App = () => {
    const routes = [
        <Route key="home" path="/" component={Home} exact />,
        <Route key="the-world" path="/the-world" component={TheWorld} exact />,
        <Route key="travelers" path="/travelers" component={Travelers} />
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
