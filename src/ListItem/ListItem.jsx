// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// Styles
import styles from './styles.css';

const ListItem = ({ tune }) => {
  return (
    <li className={styles.listItem}>
      {tune.title}
      <span>✖</span>
    </li>
  );
};

ListItem.propTypes = {
  tune: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default ListItem;
