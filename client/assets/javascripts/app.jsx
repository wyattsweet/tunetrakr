var AddTuneForm = React.createClass({

  propTypes: {
    onAdd: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      artist: "",
      name: "",
    };
  },

  onArtistChange: function(e) {
    this.setState({artist: e.target.value})
  },

  onTitleChange: function(e) {
    this.setState({name: e.target.value})
  },

  onSubmit: function(e) {
    e.preventDefault();
    this.props.onAdd({
      artist: this.state.artist,
      title: this.state.name
    });
    this.setState({
      artist: "",
      name: ""
    });
  },

  render: function() {
    return ( 
      <div id="tune-modal">
        <form id="addTuneForm" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.artist} onChange={this.onArtistChange}/>
          <input type="text" value={this.state.name} onChange={this.onTitleChange}/>
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
    artist: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="tune">
        <span>{this.props.artist}</span> – 
        <span>{this.props.title}</span>
      </div> 
    )
  } 
})

var Tunes = React.createClass({
  propTypes: {
    tunes: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      artist: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      pageTitle: React.PropTypes.string.isRequired
    })).isRequired
  },

  render: function() {
    return (
      <div id="tunesList">
        {this.props.tunes.map(function(tune) {
          return <Tune artist={tune.artist} title={tune.title} key={tune.id} />  
        })}
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
      tunes: []
    }
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
    return <Tunes tunes={this.state.tunes} />
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

  getInitialState: function() {
    return {
      addTuneModalVisible: false 
    }
  },

  addTuneButton: function() {
    this.setState({addTuneModalVisible: !this.state.addTuneModalVisible}) 
  },

  onTuneAdd: function(newTune) {
    this.state.tunes.push({
      title: newTune.title,
      artist: newTune.artist,
      id: this.state.tunes.length += 1
    })

    this.setState(this.state);
    this.setState({addPlayerModalVisible: !this.state.addPlayerModalVisible}) 
  },

  render: function() {
    return (
      <div className="application">

        <div id="top">
          <input  type="button" className="addTune" onClick={this.addTuneButton} value="Add Tune" />
          {this.props.pageTitle}
        </div>

        <Sidebar sideBarTitle={this.props.sideBarTitle}/>
        <TunesContainer /> 

        {this.state.addTuneModalVisible ? <AddTuneForm onAdd={this.onTuneAdd} /> : null}

      </div>
    );
  }
})

ReactDOM.render(<Application />, document.getElementById('container'));
