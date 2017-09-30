import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.css';

const Sidebar = ({ sideBarTitle }) => {
  console.log(styles);
  return (
    <div className={styles.root} id="sidebar">
      <Link to="/">
        <h1>{sideBarTitle}</h1>
      </Link>
      <ul>
        <li>Repertoire</li>
        <li>Practice Routine</li>
      </ul>
    </div>
  );
};
Sidebar.propTypes = {
  sideBarTitle: PropTypes.string.isRequired
};

export default Sidebar;
