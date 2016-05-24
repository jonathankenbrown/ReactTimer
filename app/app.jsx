var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // obj destructuring
var Main = require('Main');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');  //css loader (css!) chained after style loader (style!)
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');  // adding SASS loader

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>

    </Router>,
    document.getElementById('app')

    );
