import { SNACKBAR_DISPLAY, SNACKBAR_CLEAR } from 'redux/actionTypes';

export const showSnackbar = (message, kind) => {
	return dispatch => {
		dispatch({ type: SNACKBAR_DISPLAY, message, kind });
	};
};

export const clearSnackbar = () => {
	return dispatch => {
		dispatch({ type: SNACKBAR_CLEAR });
	};
};
