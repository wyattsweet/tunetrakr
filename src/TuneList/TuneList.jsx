// Vendor
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import ListItem from '../ListItem'

// Styles
import styles from './styles.css'

class TuneList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tunes: props.tunes
    }

    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onDeleteClick(e) {
    const itemId = parseInt(e.target.dataset.id, 10)
    const {tunes} = this.state
    const newItems = tunes.filter(item => item.id !== itemId)
    this.setState({
      tunes: newItems
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: this.state.tunes.length + 1,
      title: e.target.tuneInput.value
    }
    const newItemList = this.state.tunes
    newItemList.push(newItem)
    this.setState({
      tunes: newItemList
    })
    e.target.tuneInput.value = ''
  }

  render() {
    return (
      <div>
        <h1 className={styles.listTitle}>{this.props.title}</h1>
        <ul>
          {this.state.tunes.map(tune => {
            return (
              <ListItem
                key={`${tune.id}-${tune.title}`}
                onDeleteClick={this.onDeleteClick}>
                {tune}
              </ListItem>
            )
          })}
        </ul>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <input
            className={styles.input}
            name="tuneInput"
            type="text"
            placeholder="add a new tune"
            onFocus={e => (e.target.placeholder = '')}
            onBlur={e => (e.target.placeholder = 'add a new tune')}
          />
          <button className={styles.button} type="submit">
            Add
          </button>
        </form>
      </div>
    )
  }
}

TuneList.propTypes = {
  title: PropTypes.string.isRequired,
  tunes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TuneList
