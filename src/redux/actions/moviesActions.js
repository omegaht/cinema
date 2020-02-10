import axios from 'axios';
import { showSnackbar } from './snackbarActions';
import { GET_MOVIES_SUCCESS } from 'redux/actionTypes';

const URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';

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
			dispatch(showSnackbar('Movies retreived!', 'success'));
		} catch (error) {
			showSnackbar(error.message, 'error');
		}
	};
};
