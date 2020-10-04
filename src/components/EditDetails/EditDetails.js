import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper, Button } from '@material-ui/core';

class EditDetails extends Component {

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
    this.props.history.push('/details')
  }

  prepDetail = (property, event) => {
    console.log('in prepDetail', property, event);
    this.setState({
      ...this.state.updatedDetail,
      [property]: event.target.value
    })
  }

  render() {
    return (
      <Paper
        id="paper"
        elevation={3}
      >

        <h1>in editdetails</h1>
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
      </Paper>
    )
  }
}

export default connect()(withRouter(EditDetails)); 