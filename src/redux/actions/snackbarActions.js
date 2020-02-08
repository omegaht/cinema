import { SNACKBAR_SUCCESS, SNACKBAR_CLEAR } from 'redux/actionTypes';

export const showSnackbar = (message, kind) => {
	return dispatch => {
		dispatch({ type: SNACKBAR_SUCCESS, message, kind });
	};
};

export const clearSnackbar = () => {
	return dispatch => {
		dispatch({ type: SNACKBAR_CLEAR });
	};
};
