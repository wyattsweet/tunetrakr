import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = ({ sideBarTitle }) => (
  <Link id="sidebar" to="/">
    <h1>{sideBarTitle}</h1>
  </Link>
);

Sidebar.propTypes = {
  sideBarTitle: PropTypes.string.isRequired
};

export default Sidebar;
