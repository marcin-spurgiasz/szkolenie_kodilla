import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home';
import Contact from './components/contact';
import PageNotFound from './components/not_found';
import CountryList from './containers/country_list';
import CountryDetails from './containers/country_details';
import Continents from './containers/continents';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />    
        <Route path="/countries">
            <IndexRoute component={CountryList} />
            <Route path="country/:id" component={CountryDetails} />
        </Route>
        <Route path="continents" component={Continents} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={PageNotFound} />
    </Route>    
);

