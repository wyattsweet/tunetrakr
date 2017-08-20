// TunesContainer responsible for data-fetching
var TunesContainer = React.createClass({
  propTypes: {
    tunes: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        artist: React.PropTypes.string.isRequired,
        id: React.PropTypes.number.isRequired,
        pageTitle: React.PropTypes.string.isRequired
      })
    ).isRequired
  },

  getInitialState: function() {
    return {
      tunes: [],
      addTuneModalVisible: false
    };
  },

  showTuneModal: function() {
    this.setState({ addTuneModalVisible: !this.state.addTuneModalVisible });
  },

  addTune: function(tune) {
    var _this = this;
    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');

    fetch('/api/v1/tunes', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(tune)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        // add json to state.tunes
        _this.state.tunes.push({
          title: json.title,
          artist: json.artist,
          id: json.id
        });

        _this.setState({ addTuneModalVisible: !_this.state.addTuneModalVisible });
      });
  },

  removeTune: function(index, playerId) {
    var _this = this;
    fetch('/api/v1/tunes/' + playerId, {
      method: 'DELETE'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        _this.setState({ tunes: json });
      });
  },

  componentDidMount: function() {
    var _this = this;
    fetch('/api/v1/tunes').then(function(response) {
      response.json().then(function(data) {
        _this.setState({ tunes: data });
      });
    });
  },

  render: function() {
    return (
      <div id="tunesList">
        <input type="button" className="addTune" onClick={this.showTuneModal} value="Add Tune" />
        <Tunes
          tunes={this.state.tunes}
          deleteTune={function(index, playerId) {
            this.removeTune(index, playerId);
          }.bind(this)}
        />
        {this.state.addTuneModalVisible ? <AddTuneForm onAdd={this.addTune} /> : null}
      </div>
    );
  }
});
