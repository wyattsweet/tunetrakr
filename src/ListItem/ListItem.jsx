// Vendor
import PropTypes from 'prop-types';
import React from 'react';

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
      <span
        className={styles.delete}
        data-id={item.id}
        name="delete"
        onClick={onDeleteClick}
        onKeyPress={handleKeypress}
        role="button"
        tabIndex={0}
      >
        ✖
      </span>
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
