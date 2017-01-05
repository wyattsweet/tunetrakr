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

function Topbar(props) {
  return (
    <div id="topbar">{props.pageTitle}</div>
  )
}

Topbar.propTypes = {
  pageTitle: React.PropTypes.string.isRequired
}

function Sidebar(props) {
  return (
    <div id="sidebar">
      <h1>{props.sideBarTitle}</h1>
      <button className="addTune">Add Tune</button>
    </div>
  )
}

Sidebar.propTypes = {
  sideBarTitle: React.PropTypes.string.isRequired
}

function Tune(props) {
  return (
    <div className="tune">
      <span>{props.title}</span>
    </div> 
  )
}

Tune.propTypes = {
  title: React.PropTypes.string.isRequired
}

function Application(props) {
  return (
    <div className="application">
      <Sidebar sideBarTitle={props.sideBarTitle}/>

      <Topbar pageTitle={props.pageTitle} />

      <div id="tuneList">
        {props.tunes.map(function(tune) {
            return <Tune title={tune.title} key={tune.id} />  
        })}
      </div>

    </div>
  );
}

Application.propTypes = {
  pageTitle: React.PropTypes.string,
  sideBarTitle: React.PropTypes.string,
  tunes: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    composer: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
  })).isRequired
}

Application.defaultProps = {
  pageTitle: "Repertoire",
  sideBarTitle: "TT",
}

ReactDOM.render(<Application tunes={TUNES}/>, document.getElementById('container'));
