import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const SvgClose = ({onClick}) => (
  <div>
    <svg
      className={styles.close}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    </svg>
  </div>
)

SvgClose.propTypes = {
  onClick: PropTypes.func,
}

export default SvgClose
