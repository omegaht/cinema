import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { showSnackbar } from 'redux/actions/snackbarActions';
import MovieList from 'components/MovieList';
import { fetchMovies, getMovieDetail } from 'redux/actions/moviesActions';
import MovieDetail from 'components/MovieDetail';
import Rating from 'react-rating';
import FilledStar from 'assets/images/star-full.png';
import EmptyStar from 'assets/images/star-empty.png';

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

	return (
		<>
			{displayMovieDetail && (
				<MovieDetail movie={props.selectedMovie} onClose={handleMovieDetailClose} open={displayMovieDetail} />
			)}
			<Rating
				start={0}
				stop={5}
				emptySymbol={<img src={EmptyStar} className='icon' alt='empty star' />}
				fullSymbol={<img src={FilledStar} className='icon' alt='filled star' />}
			/>
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
