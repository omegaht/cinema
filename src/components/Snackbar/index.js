import { Snackbar as MaterialSnackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import { clearSnackbar } from 'redux/actions/snackbarActions';

const Alert = props => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Snackbar = () => {
	const dispatch = useDispatch();

	const { message, open, kind } = useSelector(state => state.snackbarState);

	const handleClose = () => dispatch(clearSnackbar());

	return (
		<MaterialSnackbar
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			open={open}
			autoHideDuration={4000}
			onClose={handleClose}
			aria-describedby="client-snackbar"
			action={[
				<IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
					<CloseIcon />
				</IconButton>
			]}
		>
			<Alert severity={kind}>{message}</Alert>
		</MaterialSnackbar>
	);
};

export default Snackbar;
