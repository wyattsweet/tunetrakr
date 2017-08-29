import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Sidebar from './Sidebar';
import TunesContainer from './TunesContainer';

const App = ({ pageTitle, sideBarTitle }) => (
  <div className="application">
    <div id="top">
      <h1>{pageTitle}</h1>
    </div>
    <Sidebar sideBarTitle={sideBarTitle} />
    <TunesContainer />
  </div>
);

App.defaultProps = {
  pageTitle: 'Repertoire',
  sideBarTitle: 'TT'
};

App.propTypes = {
  pageTitle: PropTypes.string,
  sideBarTitle: PropTypes.string
};

render(<App />, document.getElementById('container'));
