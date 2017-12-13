// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// Internal
import ListItem from '../ListItem';

// Styles
import styles from './styles.css';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tunes: props.tunes
    };

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDeleteClick(e) {
    const itemId = parseInt(e.target.dataset.id, 10);
    const { tunes } = this.state;
    const newItems = tunes.filter(item => item.id !== itemId);
    this.setState({
      tunes: newItems
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.tuneInput.value);
    const newItem = {
      id: this.state.tunes.length + 1,
      title: e.target.tuneInput.value
    };
    const newItemList = this.state.tunes;
    newItemList.push(newItem);
    this.setState({
      tunes: newItemList
    });
    e.target.tuneInput.value = '';
  }

  render() {
    const { tunes } = this.state;
    return (
      <div className={styles.list}>
        <h1>tunes</h1>
        <ul>
          {tunes.map(item => {
            return (
              <ListItem
                key={item.id}
                item={item}
                onDeleteClick={this.onDeleteClick}
              />
            );
          })}
        </ul>
        <form onSubmit={this.onSubmit}>
          <input
            className={styles.input}
            name="tuneInput"
            type="text"
            placeholder="add a new tune"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

ItemsList.propTypes = {
  tunes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemsList;
