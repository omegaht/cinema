import './style.css';

import { Card, CardContent, CardMedia, Dialog, DialogTitle } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
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

export const renderGenres = genres => {
	const genreNames = genres.map(genre => genre.name);
	return genreNames.join(', ');
};

const MovieDetail = props => {
	const classes = useStyles();
	const { onClose, open, movie } = props;

	return (
		<Dialog onClose={onClose} aria-labelledby='movie-detail' open={open}>
			<DialogTitle id='movie-detail'>{movie.original_title || 'no title'}</DialogTitle>
			<Card className={classes.root}>
				{movie.backdrop_path && (
					<CardMedia
						className={classes.media}
						image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
						title={movie.title}
					/>
				)}
				<CardContent>
					<div className='MovieDetailsPage'>
						<div className='MovieDetails'>
							<div className='MovieDetails'>
								<div className='info-item'>
									<b>Rating:</b> {movie.vote_average}
								</div>
								<div className='info-item'>
									<b>Status:</b> {movie.status}
								</div>
								<div className='info-item'>
									<b>Release date:</b> {movie.release_date}
								</div>
								<div className='info-item'>
									<b>Duration:</b> {movie.runtime} min.
								</div>
							</div>
							<div className='overview'>
								<h4 className='overview-title'>Overview:</h4>
								<div className='overview-content'>{movie.overview}</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Dialog>
	);
};

export default MovieDetail;
