import React from 'react';
import Helmet from 'react-helmet';

let About = React.createClass({
    render: function() {
        return (
            <div>
                <Helmet
                    title="About"
                    meta={[
                        {property: 'og:title', content: 'Home', name: 'google-site-verification', content: 'pTJuyxX8VF2krKKPzKp1SnN5fZQ49R9-DJtA1oxQntQ'}
                    ]} />
                <h1>About</h1>
            </div>
        );
    }
});

export default About;
