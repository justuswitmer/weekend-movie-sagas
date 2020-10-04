import React, { Component } from 'react';
import { withRouter, HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper, Button } from '@material-ui/core';
import './Details.css';



class Details extends Component {

  state = {
    updatedDetail: {
      title: '',
      description: ''
    }
  }

  saveDetails = (id) => {
    console.log('in saveDetails');
    this.props.dispatch({
      type: 'UPDATE_DETAIL',
      url: `/api/movie/${id}`,
      payload: this.state.updatedDetail
    })
    this.props.dispatch({
      type: 'FETCH_DETAIL',
      url: `/api/movie/${id}`
    });
    this.props.history.push('/details')
  }

  prepDetail = (property, event) => {
    console.log('in prepDetail', property, event.target.value);
    this.setState({
      updatedDetail: {
        ...this.state.updatedDetail,
        [property]: event.target.value
      }
    })
  }

  render() {
    return (
      <Router>
        <Paper
          id="paper"
          elevation={3}
        >
          {this.props.detail.map(detail =>
            <div
              key={detail.id}
              className='detailsDiv'
            >
              <Route>
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
              </Route>
              <Route path='/details/editdetails'>
                <input
                  type='text'
                  placeholder='update title'
                  onChange={(event) => this.prepDetail('title', event)}
                />
                <input
                  type='text'
                  placeholder='update description'
                  onChange={(event) => this.prepDetail('description', event)}
                />
                <Button
                  id="formatBtn"
                  variant="contained"
                  color="primary"
                  onClick={() => this.saveDetails(detail.id)}
                >Save
                </Button>
                <Button
                  id="formatBtn"
                  variant="contained"
                  color="primary"
                  onClick={() => this.props.history.push('/details')}
                >Cancel
                </Button>
              </Route>
            </div>
          )}
          <Button
            id="formatBtn"
            variant="contained"
            color="primary"
            onClick={() => this.props.history.push('/details/editdetails')}
          >Edit Movie
        </Button>
          <Button
            id="formatBtn"
            variant="contained"
            color="primary"
            onClick={() => this.props.history.push('/')}
          >Return to Movie List
        </Button>
        </Paper>
      </Router>
    )
  }
}

const mapStateToProps = reduxState => ({
  detail: reduxState.detail,

})

export default connect(mapStateToProps)(withRouter(Details)); 