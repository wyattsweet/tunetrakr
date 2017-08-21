import React from 'react';
import PropTypes from 'prop-types';

const Tune = props =>
  <div className="tune">
    <span>{props.artist}</span> –
    <span>{props.title}</span>
    <button className="remove-tune" onClick={props.removeTune}>
      x
    </button>
  </div>;

Tune.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  removeTune: PropTypes.func.isRequired
};

export default Tune;
