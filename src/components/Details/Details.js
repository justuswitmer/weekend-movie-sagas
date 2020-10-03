import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper, Button } from '@material-ui/core';
import './Details.css';



class Details extends Component {
  render() {
    return (
      <Paper
        id="paper"
        elevation={3}
      >
        {this.props.detail.map(detail =>
          <div
            key={detail.id}
            className='detailsDiv'
          >
            <img src={detail.poster} alt={detail.title} />
            <Paper
              id="paperInPaper"
              elevation={3}
            >
              <h3>Title</h3>
              <p>{detail.title}</p>
              <h3>Genre</h3>
              <p>{detail.name}</p>
              <h3>Description</h3>
              <p>{detail.description}</p>
            </Paper>
          </div>
        )}
        <Button
          id="formatBtn"
          variant="contained"
          color="primary"
          onClick={() => this.props.history.push('/')}
        >Return to Movie List
        </Button>
      </Paper>
    )
  }
}

const mapStateToProps = reduxState => ({
  detail: reduxState.detail
})

export default connect(mapStateToProps)(withRouter(Details)); 