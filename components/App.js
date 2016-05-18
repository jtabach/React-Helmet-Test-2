import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

let App = React.createClass({
    getInitialState: function() {
      return (
        {text: ''}
      )
    },

    handleEvent: function() {
      this.setState({
        text: 'work!'
      })
    },

    render: function() {

        return (
            <div>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/news">News</Link></li>
                      <li><Link to="/about">About</Link></li>
                  </ul>
                  {this.props.children}
                  <h1>Other text</h1>
                  <input
                    value={this.state.text}
                    onKeyUp={this.handleEvent.bind(this)}
                    type="text"/>
                    <h1>Something else!!! {this.state.text}</h1>
            </div>
        );
    }
});

export default App;
