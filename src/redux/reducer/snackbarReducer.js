import { SNACKBAR_CLEAR, SNACKBAR_SUCCESS } from 'redux/actionTypes';

const initialState = {
	open: false,
	message: null,
	kind: 'success'
};

const snackbarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SNACKBAR_SUCCESS:
			console.log(action);
			return {
				...state,
				open: true,
				message: action.message,
				kind: action.kind
			};
		case SNACKBAR_CLEAR:
			return {
				...state,
				open: false,
				errorSnackbarOpen: false,
				infoSnackbarOpen: false
			};
		default:
			return state;
	}
};

export default snackbarReducer;
