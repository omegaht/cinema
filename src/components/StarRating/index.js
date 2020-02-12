import React from 'react';
import Rating from 'react-rating';
import FilledStar from 'assets/images/star-full.png';
import EmptyStar from 'assets/images/star-empty.png';
import { Typography } from '@material-ui/core';

const ratingStyle = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: 10
	}
};

const StarRating = props => {
	return (
		<div style={ratingStyle.container}>
			<Typography gutterBottom variant="h5" component="h2">
				Filter by rating:
			</Typography>
			<Rating
				start={props.start}
				stop={props.stop}
				step={props.step}
				emptySymbol={<img src={EmptyStar} className="icon" alt="empty star" />}
				fullSymbol={<img src={FilledStar} className="icon" alt="filled star" />}
				onClick={props.onClick}
				placeholderRating={props.placeholder}
			/>
		</div>
	);
};

export default StarRating;
