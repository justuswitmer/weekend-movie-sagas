import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DetailList from '../DetailList/DetailList';
import './Details.css';



class Details extends Component {
  render() {
    return (
      <div>
        {this.props.detail.map(detail =>
          <DetailList
            detail={detail}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  detail: reduxState.detail,
})

export default connect(mapStateToProps)(withRouter(Details)); 