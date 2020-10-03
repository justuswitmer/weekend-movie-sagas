import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

class HomeListItem extends Component {

  seeDetails = () => {
    console.log('in seeDetails', this.props.movie.id);
    this.props.dispatch({
      type: 'FETCH_DETAIL',
      url: `/api/movie/${this.props.movie.id}`
    });
    this.props.history.push('/details');
  }

  render() {
    return (
      <Card
        onClick={this.seeDetails}
        title={this.props.movie.title}
        className='imageDiv'
      >
        <CardActionArea>
          <CardContent>
            <img src={this.props.movie.poster}
              alt={this.props.movie.title} />
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    )
  }
}

export default connect()(withRouter(HomeListItem));