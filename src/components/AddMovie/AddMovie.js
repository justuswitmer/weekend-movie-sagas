import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class AddMovie extends Component {

  selectGenre = () => {
    console.log('in selectGenre');
    this.props.dispatch({
      type: 'FETCH_GENRES'
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Movie!</h2>
        <input
          type='text'
          placeholder='Title'
        />
        <input
          type='url'
          placeholder='poster link'
        />
        <input
          type='text'
          placeholder='description'
        />
        <select onSelect={this.selectGenre}>
          <option value=''></option>
          <option value='adventure'>Adventure</option>
          <option value='animated'>Animated</option>
          <option value='biographical'>Biographical</option>
          <option value='comedy'>Comedy</option>
          <option value='disaster'>Disaster</option>
          <option value='drama'>Drama</option>
          <option value='epic'>Epic</option>
          <option value='fantasy'>Fantasy</option>
          <option value='musical'>Musical</option>
          <option value='romantic'>Romantic</option>
          <option value='scienceFiction'>Science Fiction</option>
          <option value='space-opera'>Space-Opera</option>
          <option value='superhero'>Superhero</option>
        </select>
        <button
          onClick={() => this.props.history.push('/')}
        >Cancel
        </button>
        <button>Save</button>

        <button onClick={this.selectGenre}>Genre</button>
        {this.props.genres.map(genre =>
          <p>{genre.name}</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  genres: reduxState.genres
});

export default connect(mapStateToProps)(withRouter(AddMovie));