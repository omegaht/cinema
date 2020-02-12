import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { showSnackbar } from 'redux/actions/snackbarActions';
import MovieList from 'components/MovieList';
import { fetchMovies, getMovieDetail, fetchMoviesByRating } from 'redux/actions/moviesActions';
import MovieDetail from 'components/MovieDetail';
import StarRating from 'components/StarRating';

const Movies = props => {
	useEffect(() => {
		props.fetchMovies();
	}, []);

	const [displayMovieDetail, setDisplayMovieDetail] = useState(false);

	const handleMovieItemClick = id => {
		setDisplayMovieDetail(true);
		props.getMovieDetail(id);
	};

	const handleMovieDetailClose = () => setDisplayMovieDetail(false);

	const [rating, setRating] = useState(0);

	const handleFilterByRating = value => {
		setRating(value);
		props.fetchMoviesByRating(value);
	};

	return (
		<>
			{displayMovieDetail && (
				<MovieDetail movie={props.selectedMovie} onClose={handleMovieDetailClose} open={displayMovieDetail} />
			)}
			<StarRating start={0} stop={10} step={2} onClick={handleFilterByRating} placeholder={rating} />
			<MovieList movies={props.movies} onMovieClick={handleMovieItemClick} />
		</>
	);
};

Movies.propTypes = {};

const mapStateToProps = ({ moviesState }) => ({
	movies: moviesState.movies,
	selectedMovie: moviesState.selectedMovie
});

export default connect(mapStateToProps, { showSnackbar, fetchMovies, getMovieDetail, fetchMoviesByRating })(Movies);
