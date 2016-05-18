import express from 'express';

import React from 'react';
import { Router, Route, RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import routes from './routes';
import About from './components/About';
import Content from './components/Content';
import App from './components/App';

/* create express server */
let app = express();
/* static files served from "public" through url /static/ */
app.use('/static', express.static('public'));

app.set('view engine', 'ejs');

/* a single request handler receives every server request
   and routes through react-router */
app.get('/favicon.ico', (req, res) => res.send(''));
app.use((req, res) => {
    /* create a router and give it our routes
       and the requested path */
    var renderedBody;
    var html;

    match({routes, location: req.url}, (error, redirection, renderProps) => {

      renderedBody = renderToString(<RouterContext {...renderProps}/>);
      // renderedBody = renderToString(routes);
      let head = Helmet.rewind();

      html = `
          <!doctype html>
          <html>
              <head>
                  <meta charset="utf-8" />
                  <meta name="google-site-verification" content="pTJuyxX8VF2krKKPzKp1SnN5fZQ49R9-DJtA1oxQntQ" />
                  <title>${head.title}</title>
                  ${head.meta}
                  ${head.link}
              </head>
              <body>
                  <div id="app">${renderedBody}</div>

                  <script src="/static/client.js"></script>
              </body>
          </html>
      `;
    });
    res.write(html);
    res.end();
});

app.listen(process.env.PORT || 8080, () => console.log('Listening on http://localhost:8080'));
