import React, { Component } from 'react';

import AddTuneForm from './AddTuneForm';
import Tunes from './Tunes';

// TunesContainer responsible for data-fetching
class TunesContainer extends Component {
  constructor() {
    super();
    this.removeTune = this.removeTune.bind(this);
    this.state = {
      tunes: [],
      addTuneModalVisible: false
    };

    this.showTuneModal = this.showTuneModal.bind(this);
    this.addTune = this.addTune.bind(this);
    this.removeTune = this.removeTune.bind(this);
  }

  componentDidMount() {
    const classThis = this;
    fetch('http://127.0.0.1:3000/api/v1/tunes').then(response => {
      response.json().then(data => {
        classThis.setState({ tunes: data });
      });
    });
  }

  showTuneModal() {
    this.setState({ addTuneModalVisible: !this.state.addTuneModalVisible });
  }

  addTune(tune) {
    const classThis = this;
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');

    fetch('http://127.0.0.1:3000/api/v1/tunes', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(tune)
    })
      .then(response => response.json())
      .then(json => {
        const resObj = json[0];
        classThis.state.tunes.push({
          title: resObj.title,
          artist: resObj.artist,
          id: resObj.id
        });

        classThis.setState({
          addTuneModalVisible: classThis.state.addTuneModalVisible
        });
      });

    this.setState({ addTuneModalVisible: !this.state.addTuneModalVisible });
  }

  removeTune(index, playerId) {
    const classThis = this;
    fetch(`http://127.0.0.1:3000/api/v1/tunes/${playerId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => {
        classThis.setState({ tunes: json });
      });
  }

  render() {
    return (
      <div className="mainContentArea">
        <input
          type="button"
          className="addTune"
          onClick={this.showTuneModal}
          value="Add Tune"
        />
        <Tunes tunes={this.state.tunes} deleteTune={this.removeTune} />
        {this.state.addTuneModalVisible ? (
          <AddTuneForm onAdd={this.addTune} />
        ) : null}
      </div>
    );
  }
}

export default TunesContainer;
