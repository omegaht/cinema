import React from 'react';
import NotFoundImage from 'assets/images/notfound.png';

const NotFound = props => {
	return (
		<div>
			<img src={NotFoundImage} alt="not found" title="not found page"></img>
		</div>
	);
};

export default NotFound;
