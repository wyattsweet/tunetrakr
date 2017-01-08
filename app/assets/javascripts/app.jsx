var TUNES = [
  {
    id: 1,
    title: "You'd Be So Nice to Come Home To",
    composer: "Cole Porter"
  },
  {
    id: 2,
    title: "Satin Doll",
    composer: "Billy Strayhorn"
  }
]

var AddTuneForm = React.createClass({

  propTypes: {
    onAdd: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      name: "",
    };
  },

  onNameChange: function(e) {
    this.setState({name: e.target.value})
  },

  onSubmit: function(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ""});
  },

  render: function() {
    return ( 
      <div className="add-tune-form">
        <form id="addTuneForm" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange}/>
          <input type="submit" value="Add a Tune" />
        </form> 
      </div>
    ) 
  }
})

function Topbar(props) {
  return (
    <div id="topbar">
      <button className="addTune">Add Tune</button>
      {props.pageTitle}
    </div>
  )
}

Topbar.propTypes = {
  pageTitle: React.PropTypes.string.isRequired
}

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
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="tune">
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
      composer: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired
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
      tunes: this.props.tunes
    }
  },

  onPlayerAdd: function(name) {
    console.log('tune added:', name);
    this.state.tunes.push({
      title: name,
      composer: "default",
      id: this.state.tunes.length += 1
    })

    this.setState(this.state);
  },

  render: function() {
    return (
      <div className="application">
        <Sidebar sideBarTitle={this.props.sideBarTitle}/>
  
        <Topbar pageTitle={this.props.pageTitle} />
  
        <div id="tuneList">
          {this.state.tunes.map(function(tune) {
              return <Tune title={tune.title} key={tune.id} />  
          })}
        </div>
        <AddTuneForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
})

ReactDOM.render(<Application tunes={TUNES}/>, document.getElementById('container'));
