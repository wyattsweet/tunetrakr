import React from 'react'
import PropTypes from 'prop-types'

import SvgClose from '../SVGs/SvgClose'

import styles from './styles.css'

// pass down top value from Log
// and they need to share it
class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOff: {
        top: props.topValue
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.topValue !== nextProps.topValue) {
      this.setState({modalOff: {top: nextProps.topValue}})
    }
  }

  render() {
    return (
      <div style={this.state.modalOff} className={styles.modal}>
        <div className={styles.closeButton}>
          <SvgClose onClick={this.props.onModalClose} />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  topValue: PropTypes.string.isRequired
}

export default Modal
