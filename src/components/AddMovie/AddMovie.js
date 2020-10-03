import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class AddMovie extends Component {

  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre: ''
    }
  }


  componentDidMount = () => {
    console.log('in selectGenre');
    this.props.dispatch({
      type: 'FETCH_GENRES'
    });
  }

  addMovie = (event) => {
    event.preventDefault();
    console.log('in addMovie', event, this.state.newMovie);
    this.props.dispatch({
      type: 'ADD_MOVIE',
      payload: this.state.newMovie
    });
  }

  handleChange = (property, event) => {
    console.log('in handleChange', property, event.target.value);

    this.setState({
      newMovie: {
        ...this.state.newMovie,
        [property]: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Add a Movie!</h2>
        <input
          type='text'
          placeholder='Title'
          onChange={(event) => this.handleChange('title', event)}
        />
        <input
          type='url'
          placeholder='poster link'
          onChange={(event) => this.handleChange('poster', event)}
        />
        <input
          type='text'
          placeholder='description'
          onChange={(event) => this.handleChange('description', event)}
        />
        <select
          onChange={(event) => this.handleChange('genre_id', event)}
        >
          <option></option>
          {this.props.genres.map(genre =>
            <option
              key={genre.id}
              value={genre.id}
            >{genre.name}
            </option>
          )}
        </select>
        <button
          onClick={() => this.props.history.push('/')}
        >Cancel
        </button>
        <button
          onClick={this.addMovie}
        >Save
        </button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  genres: reduxState.genres
});

export default connect(mapStateToProps)(withRouter(AddMovie));