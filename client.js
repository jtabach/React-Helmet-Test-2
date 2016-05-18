/* global window, document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

let routes = require('./routes');

// if (typeof window !== 'undefined') {
  // window.onload = function() {
    ReactDOM.render(
      <Router history={browserHistory} routes={routes} /> ,
      document.getElementById('app')
    );
  // };
// }
