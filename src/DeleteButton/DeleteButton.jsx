// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// Styles
import styles from './styles.css';

const DeleteButton = ({handleKeypress, id, onDeleteClick}) => {
  return (
    <span
      className={styles.delete}
      data-id={id}
      name="delete"
      onClick={onDeleteClick}
      onKeyPress={handleKeypress}
      role="button"
      tabIndex={0}>
      ✖
    </span>
  );
};

DeleteButton.propTypes = {
  handleKeypress: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default DeleteButton;
