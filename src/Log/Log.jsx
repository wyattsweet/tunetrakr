// Vendor
import React, { Component } from 'react';

// Internal
import LogEntry from '../LogEntry';

class Log extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    };
    this.id = 0;
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDeleteClick(e) {
    const id = parseInt(e.target.dataset.id, 10);
    const { entries } = this.state;
    const newEntries = entries.filter(entry => entry.id !== id);
    this.setState({
      entries: newEntries
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newEntry = {
      id: (this.id += 1),
      date: new Date(),
      message: e.target.log.value
    };
    const newEntries = this.state.entries;
    newEntries.push(newEntry);
    this.setState({
      entries: newEntries
    });
    e.target.log.value = '';
  }

  render() {
    const entriesReversed = this.state.entries.reverse();
    return (
      <div>
        <h1>Practice Log</h1>
        <ul>
          {entriesReversed.map(entry => (
            <LogEntry
              className="logEntry"
              {...entry}
              onDeleteClick={this.onDeleteClick}
              key={entry.id}
            />
          ))}
        </ul>
        <form onSubmit={this.onSubmit}>
          <textarea
            name="log"
            placeholder="Log a message"
            onFocus={e => (e.target.placeholder = '')}
            onBlur={e => (e.target.placeholder = 'Log a message')}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Log;
