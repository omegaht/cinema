import AppBar from 'components/AppBar';
import { Home } from 'components/Home';
import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const HOME = '/';
const NOTFOUND = '*';

const Temp = () => <div>Hello</div>;

const Routes = () => {
	return (
		<>
			<AppBar />
			<Switch>
				<Route path={HOME} component={Temp} />
				<Route path={NOTFOUND} component={NotFound} />
			</Switch>
		</>
	);
};

export default Routes;
