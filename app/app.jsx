import React, { Component } from 'react';
import { render } from 'react-dom';

// import Sidebar from './Sidebar';
// import TunesContainer from './TunesContainer';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="application">
        <div id="top">
          <h1>{this.props.pageTitle}</h1>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  pageTitle: "Repertoire",
  sideBarTitle: "TT"
}

App.propType = {
  pageTitle: React.PropTypes.string,
  sideBarTitle: React.PropTypes.string,
},

render(<App />, document.getElementById('container'));
