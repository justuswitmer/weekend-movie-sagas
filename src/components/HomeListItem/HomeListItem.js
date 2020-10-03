import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeListItem extends Component {

  seeDetails = () => {
    console.log('in seeDetails');
    this.props.history.push('/details');
  }

  render() {
    return (
      <div onClick={this.seeDetails} className='imageDisplay'>
        <img src={this.props.movie.poster}
          alt={this.props.movie.title} />
      </div>
    )
  }
}

export default connect()(withRouter(HomeListItem));