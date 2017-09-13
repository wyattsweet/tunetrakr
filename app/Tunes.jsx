import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

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
        {this.props.tunes.map((tune, index) => (
          <Link to={`/tunes/${tune.id}`} key={`tune-id-${tune.id}`}>
            <Tune
              removeTune={this.onRemoveTune(index)}
              artist={tune.artist}
              title={tune.title}
            />
          </Link>
        ))}
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
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Tunes;
