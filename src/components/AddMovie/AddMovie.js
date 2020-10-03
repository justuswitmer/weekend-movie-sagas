import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class AddMovie extends Component {

  componentDidMount = () => {
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
        <select>
          {this.props.genres.map(genre =>
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          )}

        </select>
        <button
          onClick={() => this.props.history.push('/')}
        >Cancel
        </button>
        <button>Save</button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  genres: reduxState.genres
});

export default connect(mapStateToProps)(withRouter(AddMovie));