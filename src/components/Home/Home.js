import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeListItem from '../HomeListItem/HomeListItem';

class Home extends Component {

  componentDidMount() {
    // dispatch to rootSaga
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    });
  }


  render() {
    return (
      <div>
        {this.props.movies.map(movie =>
          <HomeListItem
            key={movie.id}
            movie={movie}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  movies: reduxState.movies
});

export default connect(mapStateToProps)(withRouter(Home));