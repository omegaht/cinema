import { Card, CardContent, CardMedia, Dialog, DialogTitle } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
	avatar: {
		backgroundColor: blue[100],
		color: blue[600]
	},
	media: {
		height: 160
	}
});

const MovieDetail = props => {
	const classes = useStyles();
	const { onClose, open, movie } = props;

	return (
		<Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open}>
			<DialogTitle id='simple-dialog-title'>{movie.original_title}</DialogTitle>
			<Card className={classes.root}>
				<CardMedia
					className={classes.media}
					image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
					title={movie.title}
				/>
				<CardContent>
					<Typography variant='body2' color='textSecondary' component='p'>
						{movie.overview}
					</Typography>
				</CardContent>
			</Card>
		</Dialog>
	);
};

MovieDetail.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	movie: PropTypes.object.isRequired
};

export default MovieDetail;
