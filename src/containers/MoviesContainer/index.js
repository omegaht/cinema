import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { showSnackbar } from 'redux/actions/snackbarActions';
import MovieList from 'components/MovieList';
import { fetchMovies, getMovieDetail } from 'redux/actions/moviesActions';
import MovieDetail from 'components/MovieDetail';

const Movies = props => {
	/** Get the movies */
	useEffect(() => {
		props.fetchMovies();
	}, []);
	/** Handling for movie selection */
	const [displayMovieDetail, setDisplayMovieDetail] = useState(false);

	const handleMovieItemClick = id => {
		setDisplayMovieDetail(true);
		props.getMovieDetail(id);
	};

	const handleMovieDetailClose = () => setDisplayMovieDetail(false);

	return (
		<>
			{displayMovieDetail && (
				<MovieDetail movie={props.selectedMovie} onClose={handleMovieDetailClose} open={displayMovieDetail} />
			)}
			<MovieList movies={props.movies} onMovieClick={handleMovieItemClick} />
		</>
	);
};

Movies.propTypes = {};

const mapStateToProps = ({ moviesState }) => ({
	movies: moviesState.movies,
	selectedMovie: moviesState.selectedMovie
});

export default connect(mapStateToProps, { showSnackbar, fetchMovies, getMovieDetail })(Movies);
