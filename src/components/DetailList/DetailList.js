import React, { Component } from 'react';
import { withRouter, HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper, Button, TextField } from '@material-ui/core';

class DetailList extends Component {

  state = {
    updatedDetail: {
      title: '',
      description: ''
    }
  }

  saveDetails = (id) => {
    console.log('in saveDetails');
    // this.props.dispatch({
    //   type: 'UPDATE_DETAIL',
    //   url: `/api/movie/${id}`,
    //   payload: this.state.updatedDetail
    // })
    // this.props.dispatch({
    //   type: 'FETCH_DETAIL',
    //   url: `/api/movie/${id}`
    // });
    this.props.history.push('/details')
  }

  prepDetail = (property, event) => {
    // console.log('in prepDetail', property, event.target.value);
    // this.setState({
    //   updatedDetail: {
    //     ...this.state.updatedDetail,
    //     [property]: event.target.value
    //   }
    // })
  }

  render() {
    return (
      <Router>
        <Paper
          id="paper"
          elevation={3}
        >
          <div
            key={this.props.detail.id}
            className='detailsDiv'
          >
            <Route
              exact path='/details'
            >
              <img src={this.props.detail.poster} alt={this.props.detail.title} />
              <Paper
                id="paperInPaper"
                elevation={3}
              >
                <h3>Title</h3>
                <p>{this.props.detail.title}</p>
                <h3>Genre</h3>
                <p>{this.props.detail.name}</p>
                <h3>Description</h3>
                <p>{this.props.detail.description}</p>
              </Paper>
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
            </Route>
            <Route path='/details/editdetails'>
              <TextField
                id="outlined-basic"
                label="update title"
                variant="outlined"
                onChange={(event) => this.prepDetail('title', event)}
              />
              <TextField
                multiline
                rowsMax={4}
                id="outlined-basic"
                label="update description"
                variant="outlined"
                onChange={(event) => this.prepDetail('description', event)}
              />
              <Button
                id="formatBtn"
                variant="contained"
                color="primary"
                onClick={() => this.saveDetails(this.props.detail.id)}
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
        </Paper>

      </Router>
    )
  }
}

export default connect()(withRouter(DetailList)); 