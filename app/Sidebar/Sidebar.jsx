import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.css';

const sidebarData = [
  {
    display_name: 'Repertoire',
    key: 1,
    path: '/repertoire'
  },
  {
    display_name: 'Practice Routine',
    key: 2,
    path: '/routine'
  }
];

const renderSidebarData = sidebarItems =>
  sidebarItems.map(item => (
    <Link to={item.path} className={styles.link} key={item.key}>
      <li>{item.display_name}</li>
    </Link>
  ));

const Sidebar = ({ sideBarTitle }) => (
  <div className={styles.root}>
    <Link to="/">
      <h1 className={styles.title}>{sideBarTitle}</h1>
    </Link>
    <ul>{renderSidebarData(sidebarData)}</ul>
  </div>
);
Sidebar.propTypes = {
  sideBarTitle: PropTypes.string.isRequired
};

export default Sidebar;
