var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {  // convert it to state-less functional component using arrow func.
        return (  // removed "this" bc it's no longer in a anonymous func
            <div>
              <Navigation/>
                <div >
                    <div >
                            <p>Main.jsx Rendered</p>
                        {props.children}
                    </div>
                </div>
            </div>
        );
};

module.exports = Main;
