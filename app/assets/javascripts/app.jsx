//var Tunes = [
//  {
//    title: "You'd Be So Nice to Come Home To",
//    composer: "Cole Porter"
//  },
//  {
//    title: "Satin Doll",
//    composer: "Billy Strayhorn"
//  }
//]

function Application() {
  return (
    <div className="application">
      <div className="header">
        <h1>TuneTrakr</h1>
      </div>
      <button className="addTune">Add Tune</button>
      <div id="tuneList">
        <p id="tuneHeader">Tunes You Know</p>
        <div className="tune">
          <span>Cole Porter – </span><span>You'd Be So Nice to Come Home To</span>
        </div> 
        <div className="tune">
          <span>Billy Strayhorn – </span><span>Satin Doll</span>
        </div> 
      </div>
    </div>
  );
}

ReactDOM.render(<Application/>, document.getElementById('container'));
