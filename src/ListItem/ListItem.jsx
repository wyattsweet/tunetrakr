// Vendor
import PropTypes from 'prop-types';
import React from 'react';

import DeleteButton from '../DeleteButton';

// Styles
import styles from './styles.css';

const ListItem = ({ item, onDeleteClick }) => {
  const handleKeypress = e => {
    if (e.charCode === 13) {
      onDeleteClick(e);
    }
  };
  return (
    <li className={styles.listItem}>
      {item.title}
      <DeleteButton
        handleKeypress={handleKeypress}
        id={item.id}
        onDeleteClick={onDeleteClick}
      />
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ListItem;
