var TUNES = [
  {
    id: 1,
    title: "You'd Be So Nice to Come Home To",
    artist: "Cole Porter"
  },
  {
    id: 2,
    title: "Satin Doll",
    artist: "Billy Strayhorn"
  }
]

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
};

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

var Application = React.createClass({
  propType: {
    pageTitle: React.PropTypes.string,
    sideBarTitle: React.PropTypes.string,
    tunes: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      artist: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      pageTitle: React.PropTypes.string.isRequired
    })).isRequired
  },

  getDefaultProps: function() {
    return {
      pageTitle: "Repertoire",
      sideBarTitle: "TT"
    }
  },

  getInitialState: function() {
    return {
      tunes: this.props.tunes,
      addPlayerModalVisible: false 
    }
  },

  addPlayerButton: function() {
    this.setState({addPlayerModalVisible: !this.state.addPlayerModalVisible}) 
  },

  onPlayerAdd: function(newTune) {
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
          <input  type="button" className="addTune" onClick={this.addPlayerButton} value="Add Tune" />
          {this.props.pageTitle}
        </div>


        <Sidebar sideBarTitle={this.props.sideBarTitle}/>
  
        <div id="tuneList">
          {this.state.tunes.map(function(tune) {
              return <Tune artist={tune.artist} title={tune.title} key={tune.id} />  
          })}
        </div>

        {this.state.addPlayerModalVisible ? <AddTuneForm onAdd={this.onPlayerAdd} /> : null}

      </div>
    );
  }
})

ReactDOM.render(<Application tunes={TUNES}/>, document.getElementById('container'));
