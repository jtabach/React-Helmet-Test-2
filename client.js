/* global window, document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

let routes = require('./routes');

ReactDOM.render(
  <Router history={browserHistory} routes={routes} /> ,
  document.getElementById('app')
);
