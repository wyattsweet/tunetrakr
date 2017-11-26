// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// Internal
import ListItem from '../ListItem';

// Styles
import styles from './styles.css';

const ItemsList = ({ tunes }) => {
  return (
    <div className={styles.list}>
      <h1>tunes</h1>
      <ul>
        {tunes.map(tune => {
          return <ListItem key={tune.id} tune={tune} />;
        })}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  tunes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemsList;
