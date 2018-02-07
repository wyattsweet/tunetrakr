import React from 'react'
// import PropTypes from 'prop-types'

import SvgClose from '../SVGs/SvgClose'

import styles from './styles.css'

class Modal extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.onModalClose = this.onModalClose.bind(this)
  }

  onModalClose() {
    // In state set modalOff { top: '-600px' } when you want
    // the modal to be off
    this.setState({modalOff: {top: '-600px'}})
    // hid the modal
  }

  render() {
    return (
      <div style={this.state.modalOff} className={styles.modal}>
        <div className={styles.closeButton}>
          <SvgClose onClick={this.onModalClose} />
        </div>
      </div>
    )
  }
}

export default Modal
