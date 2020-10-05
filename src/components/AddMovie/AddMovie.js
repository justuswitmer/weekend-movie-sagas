import React, { Component } from 'react';
import { withRouter, HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper, Button, TextField, } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AddMovie.css';

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
    this.props.history.push('/addmovie/thanks');
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
      <Router>
        <Paper
          id="paper"
          elevation={3}
        >
          <Route
            exact path='/addmovie'
          >
            <h2>Add a Movie!</h2>
            <div className='addMovieDiv'>
              <div>
                <TextField
                  id="outlined-basic"
                  label="title"
                  variant="outlined"
                  onChange={(event) => this.handleChange('title', event)}
                />
                <TextField
                  id="outlined-basic"
                  label="poster link"
                  variant="outlined"
                  onChange={(event) => this.handleChange('poster', event)}
                />
                <TextField
                  multiline
                  rowsMax={6}
                  id="outlined-basic"
                  label="description"
                  variant="outlined"
                  onChange={(event) => this.handleChange('description', event)}
                />
                <FormControl variant="outlined" required>
                  <InputLabel id='dropdownList'>genre</InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="selectList"
                    onChange={(event) => this.handleChange('genre_id', event)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {this.props.genres.map(genre =>
                      <MenuItem
                        key={genre.id}
                        value={genre.id}
                      >{genre.name}
                      </MenuItem>
                    )}
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </div>
              <div>
                <Button
                  id="formatBtn"
                  variant="contained"
                  onClick={() => this.props.history.push('/')}
                >Cancel
                </Button>
                <Button
                  id="formatBtn"
                  variant="contained"
                  onClick={this.addMovie}
                >Save
                </Button>
              </div>
            </div>
          </Route>
          <Route
            path='/addmovie/thanks'
          >
            <h1>Thanks for adding a movie!</h1>
            <Button
              id="formatBtn"
              variant="contained"
              onClick={() => this.props.history.push('/')}
            >View Movie in List
            </Button>
            <Button
              id="formatBtn"
              variant="contained"
              onClick={() => this.props.history.push('/addmovie')}
            >Add Another Movie
          </Button>
          </Route>
        </Paper>
      </Router >
    )
  }
}

const mapStateToProps = reduxState => ({
  genres: reduxState.genres
});

export default connect(mapStateToProps)(withRouter(AddMovie));