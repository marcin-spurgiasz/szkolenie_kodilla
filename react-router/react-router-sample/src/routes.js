import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home';
import Contact from './components/contact';
import PageNotFound from './components/not_found';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />    
        <Route path="/contact" component={Contact} />
        <Route path='*' component={PageNotFound} />
    </Route>    
);

