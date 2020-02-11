import axios from 'axios';
import { showSnackbar } from './snackbarActions';
import { GET_MOVIES_SUCCESS, GET_MOVIE_DETAIL, SEARCH_MOVIE } from 'redux/actionTypes';

const URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
const URL_MOVIE = 'https://api.themoviedb.org/3/movie';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = (sortBy = 'popularity.desc') => {
	return async dispatch => {
		try {
			const {
				data: { results }
			} = await axios.get(`${URL_DISCOVER}?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${sortBy}`);
			dispatch({
				type: GET_MOVIES_SUCCESS,
				payload: results
			});
		} catch (error) {
			showSnackbar(error.message, 'error');
		}
	};
};

export const getMovieDetail = movieId => {
	return async dispatch => {
		try {
			const { data } = await axios.get(`${URL_MOVIE}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
			dispatch({
				type: GET_MOVIE_DETAIL,
				payload: data
			});
		} catch (error) {
			showSnackbar(error.message, 'error');
		}
	};
};

export const searchMovie = text => {
	return async dispatch => {
		try {
			const {
				data: { results }
			} = await axios.get(`${URL_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`);
			dispatch({
				type: SEARCH_MOVIE,
				payload: results
			});
		} catch (error) {
			showSnackbar(error.message, 'error');
		}
	};
};

export const fetchMoviesByRating = rating => {
	return async dispatch => {
		try {
			const {
				data: { results }
			} = await axios.get(`${URL_DISCOVER}?api_key=${process.env.REACT_APP_API_KEY}&vote_average.lte=${rating}`);
			console.log('jejeje', results);
			dispatch({
				type: GET_MOVIES_SUCCESS,
				payload: results
			});
		} catch (error) {
			showSnackbar(error.message, 'error');
		}
	};
};
