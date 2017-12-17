// Vendor
import React from 'react';

// Styles
import styles from './styles.css';

const LogEntry = ({ date, message }) => {
  return (
    <div className={styles.logEntry}>
      <time>{date.toDateString()}</time>
      <p>{message}</p>
    </div>
  );
};

export default LogEntry;
