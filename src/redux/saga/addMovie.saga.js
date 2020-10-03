import axios from 'axios';

// generator adding movie details to movie and genre database
function* addMovie(action) {
  console.log('hit addMovie; here is my action', action);
  yield axios({
    method: 'POST',
    url: '/api/movie',
    data: action.payload
  });
}

export default addMovie;