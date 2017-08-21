import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tune from './Tune';

class Tunes extends Component {
  constructor() {
    super();
    this.onRemoveTune = this.onRemoveTune.bind(this);
  }

  onRemoveTune(index) {
    return () => {
      const playerId = this.props.tunes[index].id;
      this.props.deleteTune(index, playerId);
    };
  }

  render() {
    return (
      <div>
        {this.props.tunes.map((tune, index) =>
          <Tune
            removeTune={this.onRemoveTune(index)}
            artist={tune.artist}
            title={tune.title}
            key={tune.id}
          />
        )}
      </div>
    );
  }
}

Tunes.propTypes = {
  deleteTune: PropTypes.func.isRequired,
  tunes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      pageTitle: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Tunes;
