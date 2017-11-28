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
      items: props.tunes
    };

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(e) {
    const itemId = parseInt(e.target.dataset.id, 10);
    const { items } = this.state;
    const newItems = items.filter(item => item.id !== itemId);
    this.setState({
      items: newItems
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className={styles.list}>
        <h1>tunes</h1>
        <ul>
          {items.map(item => {
            return (
              <ListItem
                key={item.id}
                item={item}
                onDeleteClick={this.onDeleteClick}
              />
            );
          })}
        </ul>
        <form name="submit">
          <input
            className={styles.input}
            type="text"
            placeholder="add a new tune"
          />
          <button name="submitButton">Add</button>
        </form>
      </div>
    );
  }
}

ItemsList.propTypes = {
  tunes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemsList;
