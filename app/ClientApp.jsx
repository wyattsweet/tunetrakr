import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

import DetailsContainer from './DetailsContainer';
import Sidebar from './Sidebar';
import TunesContainer from './TunesContainer';

const App = ({ pageTitle, sideBarTitle }) => (
  <BrowserRouter>
    <div className="application">
      <div id="top">
        <h1>{pageTitle}</h1>
      </div>
      <Sidebar sideBarTitle={sideBarTitle} />
      <Route exact path="/" component={TunesContainer} />
      <Route path="/tunes/:id" component={DetailsContainer} />
    </div>
  </BrowserRouter>
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
