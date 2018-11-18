import React, { Component } from 'react';
import { withRouter } from "react-router";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import './HeaderBar.css';
import { IconButton, Menu, MenuItem, Divider } from '@material-ui/core';
import { AccountCircle } from "@material-ui/icons";

const styles = theme => ({
	root: {
		width: '100%',
		marginBottom: '0.5rem'
	},
	grow: {
		flexGrow: 1,
	},
	darkBackGround: {
		background: '#263238',
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: '#c0c0c0',
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: '4px',
		marginRight: '4px',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit,
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		color: '#263238',
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
	modalRoot: {
		top: '2.5rem'
	}
});

class HeaderBar extends Component {

	state = {
		auth: false,
		anchorEl: null,
	};

	UNSAFE_componentWillMount() {
		const auth = sessionStorage.getItem('access-token') === null ? false : true;
		this.setState({ auth: auth });
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleProfile = () => {
		this.setState({ anchorEl: null });
		this.props.history.push({
			pathname: `/profile`
		});
	};

	handleLogout = () => {
		this.setState({ anchorEl: null });
		sessionStorage.removeItem('access-token');

		this.props.history.push({
			pathname: `/`
		});
	};

	render() {
		const { classes, search } = this.props;
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div className={classes.root} >
				<AppBar position="static" className={classes.darkBackGround}>
					<Toolbar>
						<Typography className={classes.title} variant="h6" color="inherit" noWrap onClick={this.handleLogo}>
							Image Viewer
          			</Typography>
						{
							search ?
								<>
									<div className={classes.grow} />
									<div className={classes.search}>
										<div className={classes.searchIcon}>
											<SearchIcon />
										</div>
										<InputBase
											placeholder="Search…"
											classes={{
												root: classes.inputRoot,
												input: classes.inputInput,
											}}
										/>
									</div>
								</> :
								<></>
						}
						{auth && (
							<div>
								<IconButton
									aria-owns={open ? 'menu-appbar' : undefined}
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={this.handleClose}
									className={classes.modalRoot}
								>
									<MenuItem onClick={this.handleProfile} >My account</MenuItem>
									<Divider />
									<MenuItem onClick={this.handleLogout}>Logout</MenuItem>
								</Menu>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

HeaderBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(HeaderBar));