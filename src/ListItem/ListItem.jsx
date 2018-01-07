// Vendor
import PropTypes from 'prop-types';
import React from 'react';

import DeleteButton from '../DeleteButton';

// Styles
import styles from './styles.css';

const ListItem = ({ children, onDeleteClick }) => {
  const handleKeypress = e => {
    if (e.charCode === 13) {
      onDeleteClick(e);
    }
  };
  return (
    <li className={styles.listItem}>
      {children.title}
      <DeleteButton
        handleKeypress={handleKeypress}
        id={children.id}
        onDeleteClick={onDeleteClick}
      />
    </li>
  );
};

ListItem.propTypes = {
  onDeleteClick: PropTypes.func.isRequired
};

export default ListItem;
