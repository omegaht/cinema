import axios from 'axios';
import { showSnackbar } from './snackbarActions';
import { GET_MOVIES_SUCCESS, GET_MOVIE_DETAIL } from 'redux/actionTypes';

const URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
const URL_MOVIE = 'https://api.themoviedb.org/3/movie';

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
