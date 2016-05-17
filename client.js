/* global window, document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

let routes = require('./routes');

ReactDOM.render(
  <Router>
    <routes />
  </Router>,
  document.getElementById('app')
);
