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
app.get('*', function(req, res) {
    /* create a router and give it our routes
       and the requested path */


    console.log(req.url);
    var renderedBody;

    match({routes, location: req.url}, (error, redirection, renderProps) => {
      // console.log('routes', routes);
      // console.log('RouterContext: ', RouterContext);
      // console.log('renderProps: ', {...renderProps});
      // console.log('error: ', error);
      // console.log('redirection', redirection);
      renderedBody = renderToString(<RouterContext {...renderProps}/>);
      console.log(renderedBody);
      let head = Helmet.rewind();
      console.log(head);

      let html = `
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
      res.write(html);
      res.end();
    });



    // if (req.url === '/') {
    //   renderedBody = renderToString(<App />);
    // } else {
    //   renderedBody = renderToString(<Content />);
    // }


    // Router.run(function(Root, state) {
    //     /* render `Root` (the complete document) to string
    //        and rewind Helmet for access to its data.
    //
    //        Read about why rewinding is necessary on the server:
    //        https://github.com/nfl/react-helmet#server-usage */
    //     let renderedBody = React.renderToString(<Root />);
    //     let head = Helmet.rewind();
    //
    //     /* render document with Helmet-rendered `<head>` info
    //        and React-rendered body. then, initialize the client
    //        side via `client.js`.
    //
    //        Note: Helmet will update your page's `<head`> on the client
    //              side, but you must construct `<head>` manually
    //              on the server. */
    //     let html = `
    //         <!doctype html>
    //         <html>
    //             <head>
    //                 <meta charset="utf-8" />
    //                 <title>${head.title}</title>
    //                 ${head.meta}
    //                 ${head.link}
    //             </head>
    //             <body>
    //                 <div id="app">${renderedBody}</div>
    //
    //                 <script src="/static/client.js"></script>
    //             </body>
    //         </html>
    //     `;
    //
    //     /* write html, close connection */
    //     res.write(html);
    //     res.end();
    // });
});

app.listen(process.env.PORT || 8080, () => console.log('Listening on http://localhost:8080'));
