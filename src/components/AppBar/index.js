import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'components/SearchBar';
import React from 'react';

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	root: {
		backgroundColor: '#2B2B29'
	}
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.grow}>
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						Cinema
					</Typography>
					<SearchBar />
				</Toolbar>
			</AppBar>
		</div>
	);
}
