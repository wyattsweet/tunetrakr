import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTuneForm extends Component {
  constructor() {
    super();
    this.onArtistChange = this.onArtistChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onInstrumentChange = this.onInstrumentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      artist: '',
      name: '',
      instrument: ''
    };
  }

  onArtistChange(e) {
    this.setState({ artist: e.target.value });
  }

  onTitleChange(e) {
    this.setState({ name: e.target.value });
  }

  onInstrumentChange(e) {
    this.setState({ instrument: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd({
      artist: this.state.artist,
      title: this.state.name,
      instrument: this.state.instrument
    });
    this.setState({
      artist: '',
      name: '',
      instrument: ''
    });
  }

  render() {
    return (
      <div id="tune-modal">
        <form id="addTuneForm" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Artist"
            value={this.state.artist}
            onChange={this.onArtistChange}
          />
          <input
            type="text"
            placeholder="Title"
            value={this.state.name}
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="Instrument"
            value={this.state.instrument}
            onChange={this.onInstrumentChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

AddTuneForm.defaultProps = {
  artist: '',
  name: '',
  instrument: ''
};

AddTuneForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddTuneForm;
