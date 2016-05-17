import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import BlogPosts from './components/BlogPosts';

/* create a group of routes with nesting */
let routes = (
    <Route handler={App}>
        <IndexRoute name="home" handler={Home} />
        <Route name="about" path="about" handler={About} />
        <Route name="news" handler={Content}>
            <IndexRoute name="all" handler={BlogPosts} />
            <Route name="news-tag" path="tag/:tag" handler={BlogPosts} />
        </Route>
    </Route>
);

export default routes;
