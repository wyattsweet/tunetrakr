var AddTuneForm = React.createClass({

  propTypes: {
    onAdd: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      artist: "",
      name: "",
      instrument: ""
    };
  },

  onArtistChange: function(e) {
    this.setState({artist: e.target.value})
  },

  onTitleChange: function(e) {
    this.setState({name: e.target.value})
  },

  onInstrumentChange: function(e) {
    this.setState({instrument: e.target.value})
  },

  onSubmit: function(e) {
    e.preventDefault();
    this.props.onAdd({
      artist: this.state.artist,
      title: this.state.name,
      instrument: this.state.instrument
    });
    this.setState({
      artist: "",
      name: "",
      instrument: ""
    });
  },

  render: function() {
    return ( 
      <div id="tune-modal">
        <form id="addTuneForm" onSubmit={this.onSubmit}>
          <input type="text" placeholder="Artist" value={this.state.artist} onChange={this.onArtistChange}/>
          <input type="text" placeholder="Title" value={this.state.name} onChange={this.onTitleChange}/>
          <input type="text" placeholder="Instrument" value={this.state.instrument} onChange={this.onInstrumentChange}/>
          <input type="submit" value="Add" />
        </form> 
      </div>
    ) 
  }
})
