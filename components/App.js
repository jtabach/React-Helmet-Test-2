import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

let App = React.createClass({
    render: function() {
        return (
            <div>
              <Helmet
                  title="App"
                  meta={[
                      {property: 'og:title', content: 'App and Nav'},
                  ]} />
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="news">News</Link></li>
                      <li><Link to="about">About</Link></li>
                  </ul>
                  {this.props.children}
                  <h1>Other text</h1>
            </div>
        );
    }
});

export default App;
