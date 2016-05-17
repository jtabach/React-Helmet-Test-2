import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';

/* create a group of routes with nesting */
const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="news" component={Content} />
    </Route>
  );


export default Routes;
