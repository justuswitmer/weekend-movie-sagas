import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Details extends Component {
  render() {
    return (
      <div>
        {this.props.detail.map(detail =>
          <div key={detail.id}>
            <p>{detail.title}</p>
            <img src={detail.poster} alt={detail.title} />
            <p>{detail.description}</p>
            <p>{detail.name}</p>
          </div>
        )}
        <button
          onClick={() => this.props.history.push('/')}
        >Return to Movie List
        </button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  detail: reduxState.detail
})

export default connect(mapStateToProps)(withRouter(Details)); 