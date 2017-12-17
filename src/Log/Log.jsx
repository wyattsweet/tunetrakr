import React, { Component } from 'react';

import LogEntry from '../LogEntry';

class Log extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newEntry = {
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
        {entriesReversed.map(entry => (
          <LogEntry date={entry.date} message={entry.message} />
        ))}
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
