import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showSnackbar } from 'redux/actions/snackbarActions';
import MovieList from 'components/MovieList';
import { fetchMovies } from 'redux/actions/moviesActions';

const Movies = props => {
	useEffect(() => {
		props.fetchMovies();
	});

	return (
		<div>
			<MovieList movies={props.movies} />
		</div>
	);
};

Movies.propTypes = {};

const mapStateToProps = ({ moviesState }) => ({
	movies: moviesState.movies
});

export default connect(mapStateToProps, { showSnackbar, fetchMovies })(Movies);
