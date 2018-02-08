/* eslint react/prop-types: 0 */
// Vendor
import React from 'react'

// Styles
import styles from './styles.css'

const verticalColumn = props => {
  return <div className={styles.list}>{props.children}</div>
}

export default verticalColumn
