import React from 'react'
import PropTypes from 'prop-types'
import {throttle} from 'lodash'

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
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', throttle(this.closeModal, 500))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.topValue !== nextProps.topValue) {
      this.setState({modalOff: {top: nextProps.topValue}})
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', throttle)
  }

  closeModal(e) {
    if (e.keyCode === 27 || !e.keyCode) {
      this.props.onModalClose()
    }
  }

  render() {
    return (
      <div style={this.state.modalOff} className={styles.modal}>
        <div className={styles.closeButton}>
          <SvgClose onClick={this.closeModal} />
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
