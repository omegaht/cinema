import { GET_MOVIES_SUCCESS, GET_MOVIE_DETAIL, SEARCH_MOVIE } from 'redux/actionTypes';

const initialState = {
	page: '',
	movies: [],
	total_pages: '',
	total_results: '',
	selectedMovie: ''
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
		case GET_MOVIE_DETAIL:
			return {
				...state,
				selectedMovie: action.payload
			};
		case SEARCH_MOVIE:
			return { ...state, movies: action.payload };
		default:
			return state;
	}
};

export default moviesReducer;
