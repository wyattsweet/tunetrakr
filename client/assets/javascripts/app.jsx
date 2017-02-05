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

function Sidebar(props) {
  return (
    <div id="sidebar">
      <h1>{props.sideBarTitle}</h1>
    </div>
  )
}

Sidebar.propTypes = {
  sideBarTitle: React.PropTypes.string.isRequired
}

var Tune = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
    artist: React.PropTypes.string.isRequired,
    removeTune: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div className="tune">
        <span>{this.props.artist}</span> – 
        <span>{this.props.title}</span>
        <a className="remove-tune" onClick={this.props.removeTune}>x</a>
      </div> 
    )
  } 
})

var Tunes = React.createClass({
  propTypes: {
    deleteTune: React.PropTypes.func.isRequired, 
    tunes: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      artist: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      pageTitle: React.PropTypes.string.isRequired
    })).isRequired
  },

  onRemoveTune: function(index) {
    var _this = this;
    var playerId = this.props.tunes[index].id;
    this.props.deleteTune(index, playerId);
  },

  render: function() {
    return (
      <div>
        {this.props.tunes.map(function(tune, index) {
          return <Tune 
            removeTune={function() { this.onRemoveTune(index) }.bind(this)}
            artist={tune.artist} 
            title={tune.title} 
            key={tune.id} />
        }.bind(this))}
      </div>
    )
  }
})

// TunesContainer responsible for data-fetching
var TunesContainer = React.createClass({
  propTypes: {
    tunes: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      artist: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      pageTitle: React.PropTypes.string.isRequired
    })).isRequired
  },

  getInitialState: function() {
    return {
      tunes: [],
      addTuneModalVisible: false 
    }
  },

  showTuneModal: function() {
    this.setState({addTuneModalVisible: !this.state.addTuneModalVisible}) 
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
      })
  
      _this.setState({addTuneModalVisible: !_this.state.addTuneModalVisible});
    })
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
      _this.setState({tunes: json});
    })
  },

  componentDidMount: function() {
    var _this = this;
    fetch('/api/v1/tunes')
    .then(function(response) {
      response.json().then(function(data) {
        _this.setState({tunes: data});
      })
    });
  },

  render: function() {
    return (
      <div id="tunesList">
        <input  type="button" className="addTune" onClick={this.showTuneModal} value="Add Tune" />
        <Tunes tunes={this.state.tunes} 
               deleteTune={function(index, playerId) { this.removeTune(index, playerId) }.bind(this)} />
        {this.state.addTuneModalVisible ? <AddTuneForm onAdd={this.addTune} /> : null}
      </div>
    )
  }
})

var Application = React.createClass({
  propType: {
    pageTitle: React.PropTypes.string,
    sideBarTitle: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      pageTitle: "Repertoire",
      sideBarTitle: "TT"
    }
  },


  render: function() {
    return (
      <div className="application">
        <div id="top">
          {this.props.pageTitle}
        </div>
        <Sidebar sideBarTitle={this.props.sideBarTitle}/>
        <TunesContainer /> 
      </div>
    );
  }
})

ReactDOM.render(<Application />, document.getElementById('container'));
