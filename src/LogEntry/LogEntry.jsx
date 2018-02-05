// Vendor
import PropTypes from 'prop-types'
import React from 'react'

// Internal
import DeleteButton from '../DeleteButton'

// Styles
import styles from './styles.css'

const LogEntry = ({date, id, message, onDeleteClick}) => {
  const handleKeypress = e => {
    if (e.charCode === 13) {
      onDeleteClick(e)
    }
  }
  return (
    <li className={styles.logEntry}>
      <time>{date.toDateString()}</time>
      <p>{message}</p>
      <DeleteButton
        handleKeypress={handleKeypress}
        id={id}
        onDeleteClick={onDeleteClick}
      />
    </li>
  )
}

LogEntry.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

export default LogEntry
