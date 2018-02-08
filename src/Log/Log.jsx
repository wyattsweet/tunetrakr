// Vendor
import React, {Component} from 'react'

// Internal
import LogEntry from '../LogEntry'
import Modal from '../Modal'
import style from './styles.css'
import SvgAdd from '../SVGs/SvgAdd'

class Log extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      topValue: '-600px'
    }
    this.id = 0
    this.onAddLogClick = this.onAddLogClick.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onDeleteClick(e) {
    const id = parseInt(e.target.dataset.id, 10)
    const {entries} = this.state
    const newEntries = entries.filter(entry => entry.id !== id)
    this.setState({
      entries: newEntries
    })
  }

  onSubmit(e) {
    e.preventDefault()
    if (e.target.log.value === '') {
      e.target.log.className = style.inputEmpty
      return false
    }
    e.target.log.classList.remove(style.inputEmpty)
    const newEntry = {
      id: (this.id += 1),
      date: new Date(),
      message: e.target.log.value
    }
    const newEntries = this.state.entries
    newEntries.unshift(newEntry)
    this.setState({
      entries: newEntries,
      topValue: '-600px'
    })
    e.target.log.value = ''
  }

  onAddLogClick(e) {
    if (e.charCode === 13 || !e.charCode) {
      this.setState({topValue: '25%'})
    }
  }

  render() {
    return (
      <div>
        <div className={style.header}>
          <h1>Practice Log</h1>
          <div
            onClick={this.onAddLogClick}
            role="button"
            tabIndex={0}
            onKeyPress={this.onAddLogClick}
            className={style.showModalButton}>
            <SvgAdd />
          </div>
          <Modal
            topValue={this.state.topValue}
            onModalClose={() => this.setState({topValue: '-600px'})}>
            <form onSubmit={this.onSubmit}>
              <textarea
                name="log"
                placeholder="Log a message"
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = 'Log a message')}
              />
              <button type="submit">Add</button>
            </form>
          </Modal>
        </div>
        <ul>
          {this.state.entries.map(entry => (
            <LogEntry
              className="logEntry"
              {...entry}
              onDeleteClick={this.onDeleteClick}
              key={entry.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Log
