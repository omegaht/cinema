import AppBar from 'components/AppBar';
import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesContainer from 'containers/MoviesContainer';

const HOME = '/';
const NOTFOUND = '*';

const Routes = () => {
	return (
		<>
			<AppBar />
			<Switch>
				<Route exact path={HOME} component={MoviesContainer} />
				<Route path={NOTFOUND} component={NotFound} />
			</Switch>
		</>
	);
};

export default Routes;
