
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
