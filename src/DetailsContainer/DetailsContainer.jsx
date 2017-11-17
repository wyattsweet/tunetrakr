import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      tune: {}
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const classThis = this;
    fetch(
      `http://127.0.0.1:3000/api/v1/tune/${match.params.id}`
    ).then(response => {
      response.json().then(data => {
        classThis.setState({ tune: data });
      });
    });
  }

  render() {
    return (
      <div className="mainContentArea">
        <h1>{this.state.tune.title}</h1>
        <pre>
          <code>{JSON.stringify(this.props, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

DetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default DetailsContainer;
