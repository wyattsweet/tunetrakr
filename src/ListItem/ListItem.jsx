// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// Styles
import styles from './styles.css';

const ListItem = ({ item, onDeleteClick }) => {
  return (
    <li className={styles.listItem}>
      {item.title}
      <span data-id={item.id} className={styles.delete} onClick={onDeleteClick}>
        ✖
      </span>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default ListItem;
