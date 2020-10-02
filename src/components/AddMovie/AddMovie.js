import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class AddMovie extends Component {
  render() {
    return (
      <div>
        In AddMovie
      </div>
    )
  }
}

export default connect()(withRouter(AddMovie));