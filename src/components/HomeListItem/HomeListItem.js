import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeListItem extends Component {
  render() {
    return (
      <div>
        In HomeListItem
      </div>
    )
  }
}

export default connect()(withRouter(HomeListItem));