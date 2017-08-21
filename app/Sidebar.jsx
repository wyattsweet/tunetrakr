import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ sideBarTitle }) =>
  <div id="sidebar">
    <h1>
      {sideBarTitle}
    </h1>
  </div>;

Sidebar.propTypes = {
  sideBarTitle: PropTypes.string.isRequired
};

export default Sidebar;
