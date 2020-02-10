import { GET_MOVIES_SUCCESS } from 'redux/actionTypes';

const initialState = {
	page: '',
	movies: [],
	total_pages: '',
	total_results: ''
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIES_SUCCESS:
			return {
				...state,
				//   page: action.payload.data.page,
				//   moviesList: [
				//     ...movies.moviesList,
				//     ...action.payload.data.results
				//   ],
				//   total_pages: action.payload.data.total_pages,
				//   total_results: action.payload.data.total_results
				movies: action.payload
			};
		case 'GET_MOVIES_FAIL':
			return {
				error: action.payload.error,
				errorStatus: action.payload.status
			};
		case 'CLEAR_MOVIES':
			return { ...initialState };
		default:
			return state;
	}
};

export default moviesReducer;
