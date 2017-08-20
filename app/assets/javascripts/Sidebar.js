function Sidebar(props) {
  return (
    <div id="sidebar">
      <h1>
        {props.sideBarTitle}
      </h1>
    </div>
  );
}

Sidebar.propTypes = {
  sideBarTitle: React.PropTypes.string.isRequired
};

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
        <a href="#" className="remove-tune" onClick={this.props.removeTune}>
          x
        </a>
      </div>
    );
  }
});
