import React from 'react';
import NotFoundImage from 'assets/images/notfound.PNG';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		marginTop: 40,
		width: '80%',
		borderRadius: 10
	},
	button: {
		marginTop: 50,
		width: 210,
		backgroundColor: '#4B4B49'
	}
}));

const NotFound = props => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<img src={NotFoundImage} alt="not found" title="not found page" className={classes.image} />
			<Button variant="contained" className={classes.button}>
				<Link variant="button" href="/" style={{ color: 'white' }}>
					Home
				</Link>
			</Button>
		</div>
	);
};

export default NotFound;
