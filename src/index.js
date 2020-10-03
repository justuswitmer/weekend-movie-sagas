import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAIL', fetchDetail);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie)
}

// generator sending GET to movie.router
function* fetchMovies(action) {
    console.log('hit fetchMovies', action);
    let response = yield axios({
        method: 'GET',
        url: '/api/movie'
    });
    yield put({
        type: 'SET_MOVIES',
        payload: response.data
    });
}

// generator sending detail from movie that was clicked
function* fetchDetail(action) {
    console.log('hit fetchDetail', action.url);
    let response = yield axios({
        method: 'GET',
        url: action.url
    });
    yield put({
        type: 'SET_DETAIL',
        payload: response.data
    });
}

// generator sending GET to genre.router
function* fetchGenres(action) {
    console.log('hit fetchGenres');
    let response = yield axios({
        method: 'GET',
        url: '/api/genre'
    });
    yield put({
        type: 'SET_GENRES',
        payload: response.data
    });
}

// generator adding movie details to movie and genre database
function* addMovie(action) {
    console.log('hit addMovie; here is my action', action);
    yield axios({
        method: 'POST',
        url: '/api/movie',
        data: action.payload
    });
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movie detail returned from server
const detail = (state = [], action) => {
    console.log('in detail; here is my action', action.payload);
    switch (action.type) {
        case 'SET_DETAIL':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        detail
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
