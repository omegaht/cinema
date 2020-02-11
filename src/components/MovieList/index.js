import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, ListSubheader, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		width: '80%'
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)'
	}
}));

const MovieList = ({ movies, onMovieClick }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridList cellHeight={180} className={classes.gridList}>
				<GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
					<ListSubheader component='div'>Movies</ListSubheader>
				</GridListTile>
				{movies.map(movie => (
					<GridListTile key={movie.id}>
						<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						<GridListTileBar
							title={movie.title}
							subtitle={<span>popularity: {movie.popularity}</span>}
							actionIcon={
								<IconButton
									aria-label={`info about ${movie.title}`}
									className={classes.icon}
									onClick={() => onMovieClick(movie.id)}
								>
									<InfoIcon />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};

MovieList.defaultProps = {
	movies: []
};

export default MovieList;
